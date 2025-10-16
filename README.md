# PlatformSettingsApp

A React Native application demonstrating platform-specific UI components and design patterns for iOS and Android. This app showcases how to create adaptive interfaces that follow each platform's design guidelines, including buttons, typography, shadows, and elevation.

## Features

- **Platform-Specific Buttons**: Custom button components that adapt to iOS and Android design standards
- **Adaptive UI**: Settings screen that changes appearance based on the running platform
- **Design Guidelines Compliance**: Follows Material Design for Android and Human Interface Guidelines for iOS
- **Dynamic Theming**: Colors and styles that match platform conventions
- **Interactive Settings**: Toggle switches for notifications, dark mode, and location services
- **Platform Information Display**: Shows current platform details and button styles


### Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

#### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Usage

The app displays a settings screen with platform-adaptive UI. Toggle settings using the switches, and interact with the platform-specific buttons at the bottom. The "Platform Info" section shows current platform details and styling differences.

## Modifying the App

Open `App.tsx` in your text editor and make changes. The app supports Fast Refresh for quick updates.

To forcefully reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**.
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Troubleshooting

If you're having issues, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

## Learn More

- [React Native Website](https://reactnative.dev)
- [Getting Started](https://reactnative.dev/docs/environment-setup)
- [Learn the Basics](https://reactnative.dev/docs/getting-started)
- [Blog](https://reactnative.dev/blog)
- [`@facebook/react-native`](https://github.com/facebook/react-native)
