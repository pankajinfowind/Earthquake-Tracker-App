This is a [**Earthquakes**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Test Component

Now that you have successfully run the app, let's test `EarthquakesCard Component` and `Dashboard Service`.

1. Run `yarn test` or `npm test` to run the test written test cases
2. To review test code check following file `src/components/EarthquakeCard/__test__/index.test.tsx`
3. To review test code under api call check following file `src/service/__test__/dashboardService.test.tsx`

## Step 4: File Structure

The following file structure has been followed under this project development
1. The entry point component is `App.tsx` which exist in root directory of project.
2. Inside the `App.tsx` the `RootNavigation.tsx` is initilizing which exist under the `src/navigation/RootNavigation.tsx`
3. All the screens created under the following path `src/screens`
4. All the api call files created under the following path `src/service`

## Congratulations! :tada:

You've successfully run and test your React Native App. :partying_face:

