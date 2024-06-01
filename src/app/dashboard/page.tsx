"use client";

// import { db } from "~/server/db";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useState } from "react";

export default function Dashboard() {
  const [selectedRestaurant, setSelectedRestaurant] = useState("");

  const selectRestaurant = (value: string) => {
    setSelectedRestaurant(value);
  };

  // const post = await db.query.posts.findMany();
  // console.log(db);

  return (
    <main className="container py-4">
      <div className="flex justify-between">
        {/* TODO: Turn into a breadcrumb */}
        {selectedRestaurant ? (
          <h1 className="text-2xl font-semibold">{selectedRestaurant}</h1>
        ) : (
          <h1 className="text-2xl font-semibold">Select a Restaurant</h1>
        )}
        <Select onValueChange={selectRestaurant}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a restaurant" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="The Owly">The Owly</SelectItem>
            <SelectItem value="The Bunny">The Bunny</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {selectedRestaurant && (
        <div className="grid grid-cols-3 gap-4 py-2">
          <Card className="col-span-3 md:col-span-1">
            <CardHeader>
              <CardTitle>Manage Restaurants</CardTitle>
              <CardDescription>
                Add, remove or change existing restaurants
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/dashboard">Manage Restaurants</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="col-span-3 md:col-span-2">
            <CardHeader>
              <CardTitle>Manage QR Menus</CardTitle>
              <CardDescription>Manage your generated QR Menus</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/dashboard">Manage Menus</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="col-span-3 md:col-span-2">
            <CardHeader>
              <CardTitle>View Statistics</CardTitle>
              <CardDescription>
                Gain an insignt on how many customers are viewing your menus
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/dashboard">Insights</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="col-span-3 md:col-span-1">
            <CardHeader>
              <CardTitle>Publish and Print QR Codes</CardTitle>
              <CardDescription>
                Bring your digital QR codes to life
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/dashboard">Export</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Postgres</CardTitle>
              <CardDescription>Database Data</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      )}
    </main>
  );
}
