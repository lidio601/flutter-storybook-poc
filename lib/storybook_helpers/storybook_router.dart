import 'package:flutter/material.dart';

class StorybookRouter extends StatelessWidget {
  static const STORYBOOK_PREFIX = "/storybook/";

  final RouteSettings settings;

  StorybookRouter(this.settings);

  String get story {
    return this.settings.name.replaceFirst(STORYBOOK_PREFIX, "");
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.green,
      child: Center(
        child: Text(
          this.story,
        ),
      ),
    );
  }
}
