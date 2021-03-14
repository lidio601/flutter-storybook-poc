import 'package:flutter/material.dart';

import 'storybook_helpers/onGenerateRoute.dart';
import 'pages/blank_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Sample app',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: "/",
      routes: {
        "/": (context) {
          return BlankPage();
        }
      },
      onGenerateRoute: onGenerateRoute,
    );
  }
}
