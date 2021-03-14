import 'package:flutter/material.dart';
import 'storybook_router.dart';

Route<dynamic> onGenerateRoute(RouteSettings settings,
    {RouteFactory defaultRouteHandler}) {
  print('route settings $settings');

  if (settings.name.startsWith(StorybookRouter.STORYBOOK_PREFIX)) {
    return MaterialPageRoute(
      builder: (context) {
        return StorybookRouter(settings);
      },
      maintainState: false,
    );
  }

  if (defaultRouteHandler != null) {
    return defaultRouteHandler(settings);
  }

  return null;
}
