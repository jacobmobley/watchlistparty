import type { Meta, StoryObj } from '@storybook/angular';
import { ToolbarComponent } from '../app/toolbar/toolbar.component';

const meta: Meta<ToolbarComponent> = {
  title: 'Components/Toolbar',
  component: ToolbarComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color of the toolbar',
    },
    buttonColor: {
      control: 'color',
      description: 'Color of the buttons',
    },
    buttonHoverColor: {
      control: 'color',
      description: 'Color of the buttons on hover',
    },
    buttonTextColor: {
      control: 'color',
      description: 'Color of the button text',
    },
    buttonCount: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of buttons to display',
    },
    buttonText: {
      control: 'text',
      description: 'Text to display on all buttons',
    },
  },
  args: {
    backgroundColor: '#f5f5f5',
    buttonColor: '#007bff',
    buttonHoverColor: '#0056b3',
    buttonTextColor: '#ffffff',
    buttonCount: 4,
    buttonText: 'Button',
  },
};

export default meta;
type Story = StoryObj<ToolbarComponent>;

export const Default: Story = {
  args: {
    buttonCount: 4,
    buttonText: 'Button',
  },
};

export const ManyButtons: Story = {
  args: {
    buttonCount: 8,
    buttonText: 'Option',
  },
};

export const DarkTheme: Story = {
  args: {
    backgroundColor: '#2c3e50',
    buttonColor: '#3498db',
    buttonHoverColor: '#2980b9',
    buttonTextColor: '#ffffff',
    buttonCount: 4,
    buttonText: 'Menu',
  },
}; 