'use client';

import { Button } from '@repo/design-system/components/ui/button';
import { Input } from '@repo/design-system/components/ui/input';
import { Label } from '@repo/design-system/components/ui/label';
import { Textarea } from '@repo/design-system/components/ui/textarea';
import { MoveRight } from 'lucide-react';
import Form from 'next/form';

export const MessageForm = () => {
  const sendMessage = () => {};

  return (
    <Form
      action={sendMessage}
      className="flex min-h-[490px] w-72 max-w-sm flex-col gap-4 rounded-md border p-8"
    >
      <p>Contact me</p>

      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="firstname" className="text-muted-foreground">
          First name
        </Label>
        <Input id="firstname" type="text" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="lastname" className="text-muted-foreground">
          Last name
        </Label>
        <Input id="lastname" type="text" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" type="email" autoComplete="email" required />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" rows={4} name="message" required />
      </div>

      <Button className="w-full gap-4">
        Send <MoveRight className="h-4 w-4" />
      </Button>
    </Form>
  );
};
