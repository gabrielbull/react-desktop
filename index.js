import { default as whichOs, MACOS } from './src/os';
import * as windows from './windows';
import * as macOs from './macOs';

const os = whichOs();
const select = (macOs, windows) => os === MACOS ? macOs : windows;

export { default as os } from './src/os';

export const Box = macOs.Box;
export const Button = select(macOs.Button, windows.Button);
export const Checkbox = select(macOs.Checkbox, windows.Checkbox);

export const Dialog = macOs.Dialog;
export const Label = select(macOs.Label, windows.Label);
export const Link = macOs.Link;
export const ListView = macOs.ListView;
export const ListViewFooter = macOs.ListViewFooter;
export const ListViewHeader = macOs.ListViewHeader;
export const ListViewRow = macOs.ListViewRow;
export const ListViewSection = macOs.ListViewSection;
export const ListViewSectionHeader = macOs.ListViewSectionHeader;
export const ListViewSeparator = macOs.ListViewSeparator;
export const MasterDetailsView = windows.MasterDetailsView;
export const MasterDetailsViewItem = windows.MasterDetailsViewItem;
export const MasterDetailsViewItemMaster = windows.MasterDetailsViewItemMaster;
export const MasterDetailsViewItemDetails = windows.MasterDetailsViewItemDetails;
export const NavPane = windows.NavPane;
export const NavPaneItem = windows.NavPaneItem;
export const Pin = macOs.Pin;
export const ProgressCircle = select(macOs.ProgressCircle, windows.ProgressCircle);
export const Radio = select(macOs.Radio, windows.Radio);
export const SearchField = macOs.SearchField;
export const SegmentedControl = macOs.SegmentedControl;
export const SegmentedControlItem = macOs.SegmentedControlItem;
export const Text = select(macOs.Text, windows.Text);
export const TextInput = select(macOs.TextInput, windows.TextInput);
export const TitleBar = select(macOs.TitleBar, windows.TitleBar);
export const Toolbar = macOs.Toolbar;
export const ToolbarNav = macOs.ToolbarNav;
export const ToolbarNavItem = macOs.ToolbarNavItem;
export const View = select(macOs.View, windows.View);
export const Window = select(macOs.Window, windows.Window);
