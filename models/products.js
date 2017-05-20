module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Products', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        color: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        style: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER(11),
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
        tableName: 'Products'
    });
};
