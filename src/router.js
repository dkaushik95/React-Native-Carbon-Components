import { createDrawerNavigator } from 'react-navigation';
import Home from './screens/Home/Home';
import AccordionScreen from './screens/Accordion/AccordionScreen';

const ReactNativeCarbon = createDrawerNavigator({
  Home: Home,
  Accordion: AccordionScreen,
  BreadCrumb: Home,
  Button: Home,
  Checkbox: Home,
  CodeSnippet: Home,
  ContentSwitcher: Home,
  DataTable: Home,
  DatePicker: Home,
  Dropdown: Home,
  FileUploader: Home,
  Form: Home,
  Link: Home,
  List: Home,
  Loading: Home,
  Modal: Home,
  MultiSelect: Home,
  Notification: Home,
  NumberInput: Home,
  Pagination: Home,
  ProgressIndicator: Home,
  OverflowMenu: Home,
  RadioButton: Home,
  Search: Home,
  Select: Home,
  Slider: Home,
  StructuredList: Home,
  Tabs: Home,
  Tag: Home,
  TextInput: Home,
  Tile: Home,
  Toggle: Home,
  Tooltip: Home,
  UIShell: Home
}, {
  initialRouteName: 'Accordion'
});

export default ReactNativeCarbon;
