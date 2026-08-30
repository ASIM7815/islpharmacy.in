#!/bin/bash

echo "🔄 Restarting ISL Pharmacy Website Server..."
echo ""

# Kill existing python server
echo "Stopping existing server..."
pkill -f "python3 -m http.server 8000" 2>/dev/null

# Wait a moment
sleep 1

# Clear browser caches
echo "Clearing browser caches..."
rm -rf ~/.cache/mozilla/firefox/*/cache2/* 2>/dev/null
rm -rf ~/.cache/google-chrome/*/Cache/* 2>/dev/null
rm -rf ~/.cache/chromium/*/Cache/* 2>/dev/null

# Start server
echo "Starting server on port 8000..."
cd /home/newuser/islpharmacy.in
python3 -m http.server 8000 &

sleep 2

echo ""
echo "✅ Server is running!"
echo "📱 Open: http://localhost:8000"
echo ""
echo "🔧 For mobile view:"
echo "   1. Open browser"
echo "   2. Press F12 (DevTools)"
echo "   3. Press Ctrl+Shift+M (Mobile view)"
echo "   4. Hard refresh: Ctrl+Shift+R"
echo ""
echo "🟢 College name should be visible in green!"
