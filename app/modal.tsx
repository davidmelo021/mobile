import React,{useState} from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView} from "react-native";

const App = () => {
    const[task, setTask] = useState('');
    const[day,setDay] = useState('');
    const[tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if(task.trim() && day.trim()){
            setTasks([...tasks,{task,day}]);
            setTask('');
            setDay('');
        }
    }

    const handleDeleteTask = () => {
        const newTasks = [...tasks]
        newTasks.splice(index,1)
        setTasks(newTasks)
    }

    return(
        <View style = {styles.container}>
            <Text style ={styles.title}>Lista de tarefas</Text>
            <ScrollView contentContainerStyle = {styles.scrollContainer}>
                <View style ={styles.table}>
                    <View style = {[styles.row, styles.header]}>
                        <Text style = {[styles.cell, styles.headerText]}>Tarefa</Text>
                        <Text style = {[styles.cell, styles.headerText, styles.dayHeader]}>Dia</Text>
                        <Text style = {[styles.cell, styles.headerText]}></Text>
                    </View>
                    {tasks.map((item,index) => (
                        <View key = {index} style = {[styles.row, index !== tasks.length -1 && styles.borderBottom ]}>
                            <Text style = {[styles.cell,styles.borderRight,]}>{item.task}</Text>
                            <Text style = {[styles.cell,styles.borderRight,]}>{item.day}</Text>

                            <TouchableOpacity onPress={() => handleDeleteTask(index)} style = {[styles.deleteButton,styles.borderRight]}>
                                <Text style={styles.buttonText}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style = {styles.inputContainer}>
                <TextInput
                    style = {[styles.input,styles.taskInput]}
                    placeholder="Tarefa"
                    value = {task}
                    onChange={(text) => setTask(text)}
                />

                <TextInput
                     style = {[styles.input,styles.dayInput]}
                    placeholder="Dia pra realizar a tarefa"
                    value = {day}
                    onChange={(text) => setDay(text)}
                />

                <TouchableOpacity onPress={handleAddTask}>
                    <View style ={styles.addButton}>
                        <Text style={styles.buttonText}>Adicionar</Text>

                    </View>
                   
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#94b2e9',
        paddingTop:60,
        paddingHorizontal:20,
    },
    scrollContainer:{
        flexShrink:1,
    },
    table:{
        backgroundColor:'#fff',
        borderRadius:10,
        padding:10,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        justifyContent:'space-between',
    },
    header:{
        
    }
})

export default App;