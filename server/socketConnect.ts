import socketio from 'socket.io';

export function socketChargeUpdate(socket: socketio.Socket) {
  socket.on('chup', (data) => {
    console.log(`${process.env.NEXT_PUBLIC_URL}`);
    fetch(`${process.env.NEXT_PUBLIC_URL}/taskCharge`, {
      method: 'PUT',
      body: JSON.stringify({
        taskId: data.taskId,
        employeeId: data.employeeId,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => socket.emit('chResult', { message: true }))
      .catch((error) => socket.emit('chResult', { message: false }));
  });
}

export function socketTaskUpdate(socket: socketio.Socket) {
  socket.on('taskup', (data) => {
    console.log('status変更');
    fetch(`${process.env.NEXT_PUBLIC_URL}/putStatus`, {
      method: 'PUT',
      body: JSON.stringify({
        taskId: data.taskId,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => socket.emit('chResult', { message: true }))
      .catch(() => socket.emit('chResult', { message: false }));
  });
}
