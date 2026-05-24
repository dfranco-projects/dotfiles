#!/usr/bin/env bash
# Shared helpers for bats tests.

DOTFILES_REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
export DOTFILES_REPO_DIR

# Create a per-test mock bin dir and prepend it to PATH so mocked commands
# shadow the real ones.
setup_mock_bin() {
    MOCK_BIN_DIR="$BATS_TEST_TMPDIR/mock_bin"
    mkdir -p "$MOCK_BIN_DIR"
    PATH="$MOCK_BIN_DIR:$PATH"
    export PATH MOCK_BIN_DIR
}

# Define a fake command that records its argv (one call per line, NUL-separated
# args joined by spaces) into $BATS_TEST_TMPDIR/<name>.calls and exits with the
# given status (default 0).
mock_cmd() {
    local name="$1"
    local exit_code="${2:-0}"
    local log_file="$BATS_TEST_TMPDIR/${name}.calls"
    cat > "$MOCK_BIN_DIR/$name" <<EOF
#!/bin/bash
printf '%s\n' "\$*" >> "$log_file"
exit $exit_code
EOF
    chmod +x "$MOCK_BIN_DIR/$name"
}

# Read recorded calls for a mocked command (one invocation per line).
mock_calls() {
    local name="$1"
    cat "$BATS_TEST_TMPDIR/${name}.calls" 2>/dev/null || true
}

mock_call_count() {
    local name="$1"
    local file="$BATS_TEST_TMPDIR/${name}.calls"
    [[ -f "$file" ]] && wc -l < "$file" | tr -d ' ' || echo 0
}
