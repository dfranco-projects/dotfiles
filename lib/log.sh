#!/bin/bash

BOLD="$(tput bold)"
RESET="$(tput sgr0)"

GREEN="$(tput setaf 2)"
YELLOW="$(tput setaf 3)"
RED="$(tput setaf 1)"
BLUE="$(tput setaf 4)"

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
