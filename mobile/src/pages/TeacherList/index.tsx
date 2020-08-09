import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-community/picker';

import api from '../../services/api';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList(){
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');


    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })

                setFavorites(favoritedTeachersIds);
            }
        });
    }

    useFocusEffect(()=>{
        loadFavorites();
    });

    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit(){
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                week_day,
                subject,
                time
            }
        });

        setIsFiltersVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <View style={styles.inputSelect}>
							<Picker
								style={{ color: '#c1bccc' }}
								selectedValue={subject}
								onValueChange={(itemValue, itemIndex) =>
									setSubject(String(itemValue))
								}
								itemStyle={{ backgroundColor: 'grey' }}
							>
								<Picker.Item label="Artes" value="Artes" />
								<Picker.Item label="Biologia" value="Biologia" />
								<Picker.Item label="Ciência" value="Ciência" />
								<Picker.Item label="Química" value="Química" />
								<Picker.Item label="Física" value="Física" />
								<Picker.Item label="Matemática" value="Matemática" />
								<Picker.Item label="Português" value="Português" />
                                <Picker.Item label="Banco de Dados" value="Banco de Dados" />
							</Picker>
						</View>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <View style={styles.inputSelect}>
									<Picker
										style={{ color: '#c1bccc' }}
										selectedValue={week_day}
										onValueChange={(itemValue, itemIndex) =>
											setWeekDay(String(itemValue))
										}
										itemStyle={{ backgroundColor: 'grey' }}
									>
										<Picker.Item label="Domingo" value="0" />
										<Picker.Item label="Segunda-feira" value="1" />
										<Picker.Item label="Terça-feira" value="2" />
										<Picker.Item label="Quarta-feira" value="3" />
										<Picker.Item label="Quinta-feira" value="4" />
										<Picker.Item label="Sexta-feira" value="5" />
										<Picker.Item label="Sábado" value="6" />
									</Picker>
								</View>
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text=>setTime(text)}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>
                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map( (teacher: Teacher) => {
                    return  (
                    <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher} 
                        favorited={favorites.includes(teacher.id)}
                    />
                    )
                })}
               
            </ScrollView>            
        </View>
    );
}

export default TeacherList;