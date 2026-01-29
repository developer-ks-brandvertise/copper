#!/bin/bash

# Script to clean Next.js cache and prevent database errors
# Run this script if you encounter database persistence errors

echo "🧹 Cleaning Next.js cache and temporary files..."

# Navigate to project directory
cd "$(dirname "$0")/.."

# Stop any running Next.js processes
echo "⏹️ Stopping Next.js processes..."
pkill -f "next dev" 2>/dev/null || true
pkill -f "next start" 2>/dev/null || true

# Remove cache directories
echo "🗑️ Removing cache directories..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .turbo
rm -rf .swc

# Remove any lock files
echo "🔓 Removing lock files..."
find . -name "*.lock" -type f -delete 2>/dev/null || true

# Clear system caches (macOS)
echo "🍎 Clearing system Next.js caches..."
rm -rf ~/Library/Caches/next-dev-* 2>/dev/null || true

# Clear temporary directories
echo "🧽 Clearing temporary files..."
rm -rf /tmp/next-* 2>/dev/null || true

echo "✅ Cache cleaning completed!"
echo "🚀 You can now run 'npm run dev' to start a clean development server"
