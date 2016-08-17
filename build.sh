echo "Building Project"
gulp build
echo "Status"
git status
echo "initiating adding and commiting files"
git add -A
git commit
ech "Pushing Data"
git push origin master
git subtree push --prefix dist origin gh-pages
echo "Process Complete"
