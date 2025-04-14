# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Test Commands
- `pnpm check-types`: Run TypeScript type checking
- `pnpm dev`: Start development server
- `pnpm start`: Compile and start alt:V server
- `pnpm webview:dev`: Start webview development server

## Code Style Guidelines
- **Imports**: Use absolute imports with aliases (@Server/, @Client/, @Shared/)
- **Formatting**: 4 spaces, single quotes, 120 char line limit
- **Typing**: TypeScript with strict mode disabled
- **Naming**: camelCase for variables/functions, PascalCase for classes/interfaces
- **Structure**: Follow module pattern and functional approach with hook-style functions (use*)
- **Error handling**: Use try/catch blocks with proper error logging
- **Components**: Follow Vue 3 composition API patterns for webview components
- **Documentation**: Add JSDoc comments for exported functions

When creating new files, follow existing patterns in similar files from the same directory.