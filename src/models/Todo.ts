import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg'

export interface Todoinstance extends Model {
    id: number;
    title: string;
    done: boolean;
}

export const Todo = sequelize.define<Todoinstance>('Todo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'todos',
    timestamps: false
});