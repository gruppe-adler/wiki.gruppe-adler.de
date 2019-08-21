workflow "Deploy to gh pages" {
  on = "push"
  resolves = ["JamesIves/github-pages-deploy-action@master"]
}

action "JamesIves/github-pages-deploy-action@master" {
  uses = "JamesIves/github-pages-deploy-action@master"
  env = {
    BRANCH = "gh-pages"
    BUILD_SCRIPT = "npm run build"
    FOLDER = "dist"
  }
  secrets = ["GITHUB_TOKEN"]
}
