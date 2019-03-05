/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chat_room_chat_participant', {
    chat_rooms_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'chat_room',
        key: 'id'
      }
    },
    chat_participants_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'chat_participant',
        key: 'id'
      }
    }
  }, {
    tableName: 'chat_room_chat_participant'
  });
};
