"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Minus, Plus } from "lucide-react";
import { BedDouble } from "lucide-react";

export default function GuestSelection() {
  const [rooms, setRooms] = useState([{ id: 1, guests: 1 }]);

  // Add Room (Max 5)
  const addRoom = () => {
    if (rooms.length < 5) {
      setRooms([...rooms, { id: rooms.length + 1, guests: 1 }]);
    }
  };

  // Remove Room (Min 1)
  const removeRoom = () => {
    if (rooms.length > 1) {
      setRooms(rooms.slice(0, -1));
    }
  };

  // Update Guest Count Per Room (Min 1, Max 3)
  const updateGuests = (roomId, increment) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? { ...room, guests: Math.max(1, Math.min(3, room.guests + increment)) }
          : room
      )
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="bg-white rounded-full px-4 py-6 flex items-center gap-2 text-gray-700 lg:shadow-sm lg:border border-b md:shadow-none md:border-none"
        >
          <BedDouble className="w-4 h-4" />
          {rooms.length} {rooms.length > 1 ? "Rooms" : "Room"}, {rooms.reduce((acc, room) => acc + room.guests, 0)} Guests
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3">
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Rooms</span>
          <span className="font-medium">Guests</span>
        </div>
        {rooms.map((room) => (
          <div key={room.id} className="flex justify-between items-center py-2 border-b">
            <span>Room {room.id}</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateGuests(room.id, -1)}
                disabled={room.guests === 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-6 text-center">{room.guests}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateGuests(room.id, 1)}
                disabled={room.guests === 3}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
        <div className="flex justify-between mt-3">
          <Button variant="ghost" onClick={removeRoom} disabled={rooms.length === 1}>
            Delete Room
          </Button>
          <Button variant="ghost" onClick={addRoom} disabled={rooms.length === 5}>
            Add Room
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}