"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../ui/input";

type DatePickerProps = {
  name: string;
  value: Date;
  onChangeDate: (date: Date) => void;
};

export function DatePicker(props: DatePickerProps) {
  console.log("🚀 ~ DatePicker ~ props:", props);
  const { name, value, onChangeDate } = props;
  const [date, setDate] = React.useState<Date>();

  const onSelectDate = (date: Date | undefined) => {
    if (date) {
      setDate(date);
      onChangeDate(date);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>

          {/* <Input type="date" name={props.name} value={props.value.toDateString()} hidden /> */}
        </>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e: Date | undefined) => {
            onSelectDate(e);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
