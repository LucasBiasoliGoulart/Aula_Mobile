import { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Container, BtnFilter, BtnFilterTxt, ModalContent } from "./styled";
import { ptBR } from "./localeCalendar";

import { Calendar, LocaleConfig } from "react-native-calendars";

export default function CalendarModal({ setVisible, handleFilter }) {
    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});

    LocaleConfig.locales['pt-br'] = ptBR;
    LocaleConfig.defaultLocale = 'pt-br';

    function handleFilterDate() {
        handleFilter(dateNow);
        setVisible();
    }

    function handleOnDayPress(date) {
        setDateNow(new Date(date. dateString))
        let markedDay={};
        markedDay[date.dateString]= {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#fff'
        }
        setMarkedDates(markedDay)
    }

    return (
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex: 1 }} />
            </TouchableWithoutFeedback>

            <ModalContent>
                <Calendar 
                onDayPress={handleOnDayPress} 
                markedDates={markedDates}
                />

                <BtnFilter onPress={handleFilterDate}>
                    <BtnFilterTxt>Filtrar</BtnFilterTxt>
                </BtnFilter>
            </ModalContent>
        </Container>
    );
}