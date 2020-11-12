// Creating our subscription model
module.exports = function(sequelize, DataTypes) {
  const Subscription = sequelize.define("Subscription", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    frequency: {
      type: DataTypes.STRING,
      allowNull: false
      //   validate later
      //   validate:{

      //   }
      //   feature to edit amount paid per subscription
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    withdrawalDate: {
<<<<<<< HEAD
      type: DataTypes.STRING
=======
      //Change this to a date type; Adjust client-side user date selection.
      type: DataTypes.INTEGER,
      allowNull: false
>>>>>>> origin
    }
  });
 
  // Subscription.associate = function(models) {
  //   models.Subscription.belongsTo(models.User);
  // };
  Subscription.associate = function(models) {
    Subscription.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Subscription;
};
