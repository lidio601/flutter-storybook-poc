# Flutter for Web + StorybookJS Server integration

A sample Flutter project to demostrate how to use Storybook.JS server for both developing and static build.

## How to run

```
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir=/tmp/temp_chrome_user_data_dir about:blank --disable-web-security
flutter run -d web-server --web-port=60772
cd storybook;
npm run storybook
```

## How to build

```
flutter build web
cd storybook;
npm run build-storybook;
cd ../build/web;
npx serve ./
```
