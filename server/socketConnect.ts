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

export function socketTaskCreate(socket: socketio.Socket) {
  socket.on('crtask', (data) => {
    console.log('status変更');
    fetch(`${process.env.NEXT_PUBLIC_URL}/create`, {
      method: 'POST',
      body: JSON.stringify({
        taskName: data.taskName,
        taskDetail: data.taskDetail,
        deadLine: data.deadLine,
        department: data.department,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => socket.emit('crResult', { message: true }))
      .catch(() => socket.emit('crResult', { message: false }));
  });
}

export function socketTaskFix(socket: socketio.Socket) {
  socket.on('uptask', (data) => {
    console.log(data);
    fetch(`${process.env.NEXT_PUBLIC_URL}/taskFix`, {
      method: 'PUT',
      body: JSON.stringify({
        id: data.id,
        taskDetail: data.taskDetail,
        deadLine: data.deadLine,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => socket.emit('crResult', { message: true }))
      .catch(() => socket.emit('crResult', { message: false }));
  });
}
