module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CurrentProduct', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        color: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        type: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        style: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        }
    }, {
        tableName: 'CurrentProduct'
    });
};
