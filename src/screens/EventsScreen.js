import React, { useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useEvents from "../hooks/useEvents";
import EventsList from "../components/EventsList";
import {useEffect} from "react";

const EventsScreen = () => {
    const [term, setTerm] = useState("");
    const [events, searchEvents, errorMessage] = useEvents();
    useEffect(() => {

        searchEvents("");
    }, []);

    return (
        <View style={{ flex: 1 }}>
                <EventsList title="Events" events={events} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default EventsScreen;