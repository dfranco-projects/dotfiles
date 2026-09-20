#!/bin/bash

# Colour only when tput can describe the current terminal. Without the guard,
# an unset or unusable $TERM (CI, piped output) makes tput exit nonzero and
# takes the sourcing script down with it under `set -e`.
if tput sgr0 >/dev/null 2>&1; then
    BOLD="$(tput bold)"
    RESET="$(tput sgr0)"

    GREEN="$(tput setaf 2)"
    YELLOW="$(tput setaf 3)"
    RED="$(tput setaf 1)"
    BLUE="$(tput setaf 4)"
else
    BOLD="" RESET="" GREEN="" YELLOW="" RED="" BLUE=""
fi

log() {
    echo "${BOLD}${BLUE}==>${RESET} $1"
}

success() {
    echo "${GREEN}✔${RESET} $1"
}

warn() {
    echo "${YELLOW}⚠${RESET} $1"
}

error() {
    echo "${RED}✖${RESET} $1"
}
