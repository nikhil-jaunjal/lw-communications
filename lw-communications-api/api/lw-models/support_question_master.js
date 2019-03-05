/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('support_question_master', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_modified_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    applicable_for_tenant: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    applicablefor_pm: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'support_question_master'
  });
};
