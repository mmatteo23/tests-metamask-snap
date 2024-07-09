import type { SnapComponent } from '@metamask/snaps-sdk/jsx';
import {
  Button,
  Box,
  Field,
  Heading,
  Form,
  Input,
  Dropdown,
  Option,
  // Checkbox,
} from '@metamask/snaps-sdk/jsx';

/**
 * The state of the {@link InteractiveForm} component.
 */
export type InteractiveFormState = {
  /**
   * The value of the example input.
   */
  'example-input': string;

  /**
   * The value of the example dropdown.
   */
  'example-dropdown': string;

  /**
   * The value of the example checkbox.
   */
  'example-checkbox': boolean;
};

export const InteractiveForm: SnapComponent = () => {
  console.log('InteractiveForm');
  return (
    <Box>
      <Heading>Interactive UI Example Snap</Heading>
    </Box>
  );
};
