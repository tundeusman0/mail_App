import { Picker } from 'random-picker';

const statusPicker = new Picker();
statusPicker.option('read');
statusPicker.option('draft');
statusPicker.option('sent');
statusPicker.option('unread');

export default statusPicker;