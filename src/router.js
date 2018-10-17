import { createDrawerNavigator } from 'react-navigation';
import Home from './screens/Home/Home';
import AccordionScreen from './screens/Accordion/AccordionScreen';
import BreadcrumbScreen from './screens/Breadcrumb/BreadcrumbScreen';
import CheckboxScreen from './screens/Checkbox/CheckboxScreen';
import ContentSwitcherScreen from './screens/ContentSwitcher/ContentSwitcherScreen';

const ReactNativeCarbon = createDrawerNavigator({
  Home: Home,
  Accordion: AccordionScreen,
  BreadCrumb: BreadcrumbScreen,
  Button: Home,
  Checkbox: CheckboxScreen,
  CodeSnippet: Home,
  ContentSwitcher: ContentSwitcherScreen,
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
  initialRouteName: 'ContentSwitcher'
});

export default ReactNativeCarbon;
