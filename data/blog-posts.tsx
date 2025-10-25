import type { BlogPost } from "@/types/blog"

export const blogPosts: BlogPost[] = [
  {
    id: "java-socket-programming",
    title: "Lập Trình Socket với Java - Hướng Dẫn Toàn Diện",
    excerpt:
      "Tìm hiểu cách sử dụng Java Socket API để xây dựng các ứng dụng mạng client-server. Bài viết này bao gồm các ví dụ thực tế và best practices.",
    author: "Tác Giả Blog",
    date: "15 Tháng 10, 2024",
    readTime: "12 phút đọc",
    tags: ["Java", "Socket", "Mạng"],
    content: `Lập trình Socket là nền tảng của lập trình mạng. Java cung cấp một API mạnh mẽ để làm việc với Socket thông qua các lớp trong gói java.net.

1. GIỚI THIỆU VỀ SOCKET
Socket là một điểm cuối của một kết nối mạng. Mỗi Socket được xác định bởi một địa chỉ IP và một cổng (port). Java cung cấp hai loại Socket chính:
- TCP Socket (Socket): Kết nối hướng kết nối, đáng tin cậy
- UDP Socket (DatagramSocket): Kết nối không hướng kết nối, nhanh hơn nhưng không đảm bảo

2. KIẾN TRÚC CLIENT-SERVER
Mô hình client-server là cơ bản trong lập trình mạng:
- Server: Lắng nghe các kết nối đến trên một cổng cụ thể
- Client: Kết nối đến server thông qua địa chỉ IP và cổng

3. VÍ DỤ THỰC TẾ
Dưới đây là một ví dụ đơn giản về server TCP:

public class SimpleServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(5000);
        System.out.println("Server đang lắng nghe trên cổng 5000...");
        
        Socket clientSocket = serverSocket.accept();
        System.out.println("Client đã kết nối!");
        
        InputStream input = clientSocket.getInputStream();
        OutputStream output = clientSocket.getOutputStream();
        
        // Xử lý dữ liệu từ client
        byte[] buffer = new byte[1024];
        int bytesRead = input.read(buffer);
        String message = new String(buffer, 0, bytesRead);
        System.out.println("Nhận được: " + message);
        
        // Gửi phản hồi
        output.write("Đã nhận được tin nhắn!".getBytes());
        
        clientSocket.close();
        serverSocket.close();
    }
}

4. XỬ LÝ NHIỀU CLIENT
Để xử lý nhiều client cùng lúc, chúng ta sử dụng Threads:

public class MultiClientServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(5000);
        
        while (true) {
            Socket clientSocket = serverSocket.accept();
            new Thread(new ClientHandler(clientSocket)).start();
        }
    }
}

class ClientHandler implements Runnable {
    private Socket socket;
    
    public ClientHandler(Socket socket) {
        this.socket = socket;
    }
    
    @Override
    public void run() {
        try {
            InputStream input = socket.getInputStream();
            OutputStream output = socket.getOutputStream();
            
            byte[] buffer = new byte[1024];
            int bytesRead = input.read(buffer);
            String message = new String(buffer, 0, bytesRead);
            
            output.write(("Echo: " + message).getBytes());
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

5. BEST PRACTICES
- Luôn đóng Socket sau khi sử dụng
- Sử dụng try-with-resources để quản lý tài nguyên
- Xử lý ngoại lệ một cách thích hợp
- Sử dụng Thread pool cho nhiều client

Lập trình Socket với Java là một kỹ năng quan trọng cho bất kỳ lập trình viên mạng nào. Với sự hiểu biết vững chắc về Socket, bạn có thể xây dựng các ứng dụng mạng mạnh mẽ và hiệu quả.`,
  },
  {
    id: "nodejs-websocket-realtime",
    title: "WebSocket với Node.js - Xây Dựng Ứng Dụng Real-time",
    excerpt:
      "Khám phá cách sử dụng WebSocket để xây dựng các ứng dụng real-time với Node.js. Bao gồm ví dụ chat application và best practices.",
    author: "Tác Giả Blog",
    date: "12 Tháng 10, 2024",
    readTime: "10 phút đọc",
    tags: ["JavaScript", "Node.js", "WebSocket"],
    content: `WebSocket là một giao thức truyền thông hai chiều qua một kết nối TCP duy nhất. Nó cho phép giao tiếp real-time giữa client và server.

1. GIỚI THIỆU WEBSOCKET
WebSocket khác với HTTP ở chỗ:
- Kết nối được thiết lập một lần và duy trì
- Cả client và server đều có thể gửi dữ liệu bất kỳ lúc nào
- Độ trễ thấp hơn so với polling

2. THIẾT LẬP WEBSOCKET SERVER VỚI NODE.JS
Chúng ta sử dụng thư viện 'ws' để tạo WebSocket server:

const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client đã kết nối');
    
    ws.on('message', (message) => {
        console.log('Nhận được:', message);
        // Gửi lại cho tất cả client
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
    
    ws.on('close', () => {
        console.log('Client đã ngắt kết nối');
    });
});

server.listen(8080, () => {
    console.log('WebSocket server đang chạy trên cổng 8080');
});

3. CLIENT-SIDE WEBSOCKET
Trên phía client (JavaScript):

const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Đã kết nối đến server');
    ws.send('Xin chào server!');
};

ws.onmessage = (event) => {
    console.log('Nhận được từ server:', event.data);
};

ws.onerror = (error) => {
    console.error('Lỗi WebSocket:', error);
};

ws.onclose = () => {
    console.log('Đã ngắt kết nối');
};

4. XÂY DỰNG CHAT APPLICATION
Ví dụ về một ứng dụng chat đơn giản:

const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

const users = new Map();

wss.on('connection', (ws) => {
    let userId = null;
    
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        
        if (data.type === 'join') {
            userId = data.userId;
            users.set(userId, ws);
            broadcast({
                type: 'user-joined',
                userId: userId,
                message: userId + ' đã tham gia'
            });
        } else if (data.type === 'message') {
            broadcast({
                type: 'message',
                userId: userId,
                message: data.message
            });
        }
    });
    
    ws.on('close', () => {
        if (userId) {
            users.delete(userId);
            broadcast({
                type: 'user-left',
                userId: userId,
                message: userId + ' đã rời đi'
            });
        }
    });
});

function broadcast(data) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
}

server.listen(8080);

5. BEST PRACTICES
- Xử lý lỗi kết nối một cách thích hợp
- Sử dụng heartbeat để phát hiện kết nối chết
- Xác thực người dùng trước khi cho phép kết nối
- Giới hạn kích thước tin nhắn
- Sử dụng SSL/TLS (WSS) cho kết nối bảo mật

WebSocket là công nghệ mạnh mẽ cho các ứng dụng real-time. Với Node.js, bạn có thể dễ dàng xây dựng các ứng dụng chat, thông báo real-time, và nhiều hơn nữa.`,
  },
  {
    id: "java-threading-network",
    title: "Xử Lý Đa Luồng trong Lập Trình Mạng Java",
    excerpt:
      "Tìm hiểu cách sử dụng Threading để xử lý nhiều kết nối mạng đồng thời trong Java. Bao gồm Thread Pool, Executor Framework, và các mẫu thiết kế.",
    author: "Tác Giả Blog",
    date: "10 Tháng 10, 2024",
    readTime: "14 phút đọc",
    tags: ["Java", "Threading", "Mạng"],
    content: `Xử lý đa luồng là một khía cạnh quan trọng của lập trình mạng. Nó cho phép server xử lý nhiều client cùng lúc mà không bị chặn.

1. GIỚI THIỆU VỀ THREADING
Thread là một luồng thực thi độc lập trong một chương trình. Trong lập trình mạng, mỗi client thường được xử lý bởi một thread riêng.

2. TẠO THREAD CHO MỖI CLIENT
Cách đơn giản nhất là tạo một thread mới cho mỗi client:

public class ThreadPerClientServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(5000);
        
        while (true) {
            Socket clientSocket = serverSocket.accept();
            Thread clientThread = new Thread(() -> {
                try {
                    handleClient(clientSocket);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });
            clientThread.start();
        }
    }
    
    private static void handleClient(Socket socket) throws IOException {
        InputStream input = socket.getInputStream();
        OutputStream output = socket.getOutputStream();
        
        byte[] buffer = new byte[1024];
        int bytesRead = input.read(buffer);
        String message = new String(buffer, 0, bytesRead);
        
        output.write(("Xử lý: " + message).getBytes());
        socket.close();
    }
}

3. THREAD POOL VỚI EXECUTOR FRAMEWORK
Tạo thread mới cho mỗi client có thể tốn kém. Thay vào đó, sử dụng Thread Pool:

import java.util.concurrent.*;

public class ThreadPoolServer {
    public static void main(String[] args) throws IOException {
        ExecutorService executor = Executors.newFixedThreadPool(10);
        ServerSocket serverSocket = new ServerSocket(5000);
        
        while (true) {
            Socket clientSocket = serverSocket.accept();
            executor.execute(() -> {
                try {
                    handleClient(clientSocket);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });
        }
    }
    
    private static void handleClient(Socket socket) throws IOException {
        // Xử lý client
        socket.close();
    }
}

4. SYNCHRONIZATION VÀ THREAD SAFETY
Khi nhiều thread truy cập dữ liệu chung, cần đảm bảo thread safety:

public class ThreadSafeCounter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public synchronized int getCount() {
        return count;
    }
}

Hoặc sử dụng AtomicInteger:

import java.util.concurrent.atomic.AtomicInteger;

public class AtomicCounter {
    private AtomicInteger count = new AtomicInteger(0);
    
    public void increment() {
        count.incrementAndGet();
    }
    
    public int getCount() {
        return count.get();
    }
}

5. COMMUNICATION GIỮA THREADS
Sử dụng BlockingQueue để giao tiếp giữa threads:

import java.util.concurrent.*;

public class ProducerConsumer {
    public static void main(String[] args) {
        BlockingQueue<String> queue = new LinkedBlockingQueue<>();
        
        // Producer thread
        new Thread(() -> {
            try {
                for (int i = 0; i < 10; i++) {
                    queue.put("Tin nhắn " + i);
                    Thread.sleep(1000);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }).start();
        
        // Consumer thread
        new Thread(() -> {
            try {
                while (true) {
                    String message = queue.take();
                    System.out.println("Nhận được: " + message);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }).start();
    }
}

6. BEST PRACTICES
- Sử dụng Thread Pool thay vì tạo thread mới
- Đảm bảo thread safety khi truy cập dữ liệu chung
- Sử dụng high-level concurrency utilities
- Xử lý InterruptedException một cách thích hợp
- Tránh deadlock bằng cách giữ lock thời gian ngắn

Xử lý đa luồng là một kỹ năng quan trọng cho lập trình viên Java. Với sự hiểu biết vững chắc, bạn có thể xây dựng các server mạng hiệu quả và có khả năng mở rộng.`,
  },
  {
    id: "http-protocol-nodejs",
    title: "Hiểu Rõ HTTP Protocol và Xây Dựng Server với Node.js",
    excerpt:
      "Tìm hiểu chi tiết về HTTP protocol, các phương thức HTTP, headers, và cách xây dựng HTTP server từ đầu với Node.js.",
    author: "Tác Giả Blog",
    date: "8 Tháng 10, 2024",
    readTime: "11 phút đọc",
    tags: ["JavaScript", "HTTP", "Node.js"],
    content: `HTTP (HyperText Transfer Protocol) là nền tảng của web. Hiểu rõ HTTP là quan trọng cho bất kỳ lập trình viên web nào.

1. GIỚI THIỆU VỀ HTTP
HTTP là một giao thức ứng dụng dựa trên TCP/IP. Nó sử dụng mô hình request-response:
- Client gửi request đến server
- Server xử lý request và gửi response lại

2. CÁC PHƯƠNG THỨC HTTP
- GET: Lấy dữ liệu từ server
- POST: Gửi dữ liệu đến server
- PUT: Cập nhật dữ liệu trên server
- DELETE: Xóa dữ liệu trên server
- PATCH: Cập nhật một phần dữ liệu
- HEAD: Giống GET nhưng không có body

3. HTTP STATUS CODES
- 1xx: Thông tin
- 2xx: Thành công (200 OK, 201 Created)
- 3xx: Chuyển hướng (301 Moved, 304 Not Modified)
- 4xx: Lỗi client (400 Bad Request, 404 Not Found)
- 5xx: Lỗi server (500 Internal Server Error)

4. XÂY DỰNG HTTP SERVER VỚI NODE.JS
Cách đơn giản nhất:

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Headers:', req.headers);
    
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Xin chào Node.js!</h1>');
    } else if (req.url === '/api/data' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Dữ liệu từ server' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Không tìm thấy trang');
    }
});

server.listen(3000, () => {
    console.log('Server đang chạy trên http://localhost:3000');
});

5. XỬ LÝ REQUEST BODY
Để xử lý dữ liệu POST:

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/api/submit') {
        let body = '';
        
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                console.log('Nhận được:', data);
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, data: data }));
            } catch (e) {
                res.writeHead(400);
                res.end('Invalid JSON');
            }
        });
    }
});

server.listen(3000);

6. HEADERS VÀ COOKIES
Làm việc với headers:

const http = require('http');

const server = http.createServer((req, res) => {
    // Đọc headers
    const userAgent = req.headers['user-agent'];
    const cookie = req.headers['cookie'];
    
    // Ghi headers
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Set-Cookie', 'sessionId=abc123; Path=/');
    res.setHeader('X-Custom-Header', 'Giá trị tùy chỉnh');
    
    res.end('Headers đã được thiết lập');
});

server.listen(3000);

7. ROUTING ĐƠN GIẢN
Tạo một router cơ bản:

const http = require('http');
const url = require('url');

const routes = {
    '/': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Trang chủ');
    },
    '/about': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Về chúng tôi');
    },
    '/api/users': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify([{ id: 1, name: 'Người dùng 1' }]));
    }
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    if (routes[pathname]) {
        routes[pathname](req, res);
    } else {
        res.writeHead(404);
        res.end('Không tìm thấy');
    }
});

server.listen(3000);

8. BEST PRACTICES
- Luôn thiết lập Content-Type header
- Xử lý lỗi một cách thích hợp
- Sử dụng framework như Express để đơn giản hóa
- Xác thực input từ client
- Sử dụng HTTPS cho dữ liệu nhạy cảm

HTTP là giao thức mạnh mẽ và linh hoạt. Với Node.js, bạn có thể dễ dàng xây dựng các ứng dụng web hiệu quả.`,
  },
  {
    id: "tcp-udp-comparison",
    title: "So Sánh TCP và UDP - Khi Nào Sử Dụng Cái Nào",
    excerpt:
      "Phân tích chi tiết sự khác biệt giữa TCP và UDP, ưu nhược điểm của mỗi giao thức, và khi nào nên sử dụng chúng.",
    author: "Tác Giả Blog",
    date: "5 Tháng 10, 2024",
    readTime: "9 phút đọc",
    tags: ["Mạng", "TCP", "UDP"],
    content: `TCP và UDP là hai giao thức truyền tải chính trong mô hình OSI. Mỗi giao thức có những đặc điểm riêng phù hợp với các trường hợp sử dụng khác nhau.

1. TCP (TRANSMISSION CONTROL PROTOCOL)
TCP là giao thức hướng kết nối:
- Thiết lập kết nối trước khi truyền dữ liệu (3-way handshake)
- Đảm bảo dữ liệu được gửi đúng thứ tự
- Phát hiện và xử lý lỗi
- Kiểm soát luồng dữ liệu
- Chậm hơn UDP nhưng đáng tin cậy

2. UDP (USER DATAGRAM PROTOCOL)
UDP là giao thức không hướng kết nối:
- Không thiết lập kết nối trước
- Gửi dữ liệu ngay lập tức
- Không đảm bảo dữ liệu được nhận
- Không kiểm soát luồng
- Nhanh hơn TCP nhưng ít đáng tin cậy

3. SO SÁNH CHI TIẾT

Tiêu chí          | TCP              | UDP
Kết nối           | Hướng kết nối     | Không hướng kết nối
Độ tin cậy        | Cao              | Thấp
Tốc độ            | Chậm             | Nhanh
Thứ tự dữ liệu    | Đảm bảo          | Không đảm bảo
Kiểm soát luồng   | Có              | Không
Overhead          | Cao              | Thấp
Kích thước header | 20 bytes         | 8 bytes

4. TRƯỜNG HỢP SỬ DỤNG TCP
- Email (SMTP, POP3)
- Web (HTTP, HTTPS)
- FTP (File Transfer)
- SSH (Secure Shell)
- Telnet
- Bất kỳ ứng dụng cần độ tin cậy cao

5. TRƯỜNG HỢP SỬ DỤNG UDP
- Video streaming
- Audio streaming
- Online gaming
- DNS queries
- DHCP
- VoIP
- Bất kỳ ứng dụng cần tốc độ cao hơn độ tin cậy

6. VÍ DỤ TCP VỚI JAVA

import java.io.*;
import java.net.*;

public class TCPServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(5000);
        System.out.println("TCP Server đang lắng nghe...");
        
        Socket socket = serverSocket.accept();
        System.out.println("Client đã kết nối");
        
        BufferedReader reader = new BufferedReader(
            new InputStreamReader(socket.getInputStream())
        );
        PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);
        
        String message = reader.readLine();
        System.out.println("Nhận được: " + message);
        writer.println("Đã nhận được: " + message);
        
        socket.close();
        serverSocket.close();
    }
}

7. VÍ DỤ UDP VỚI JAVA

import java.net.*;

public class UDPServer {
    public static void main(String[] args) throws IOException {
        DatagramSocket socket = new DatagramSocket(5000);
        System.out.println("UDP Server đang lắng nghe...");
        
        byte[] buffer = new byte[1024];
        DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
        
        socket.receive(packet);
        String message = new String(packet.getData(), 0, packet.getLength());
        System.out.println("Nhận được: " + message);
        
        InetAddress clientAddress = packet.getAddress();
        int clientPort = packet.getPort();
        
        String response = "Đã nhận được: " + message;
        DatagramPacket responsePacket = new DatagramPacket(
            response.getBytes(),
            response.length(),
            clientAddress,
            clientPort
        );
        socket.send(responsePacket);
        
        socket.close();
    }
}

8. HYBRID APPROACH
Một số ứng dụng sử dụng cả TCP và UDP:
- TCP cho các lệnh điều khiển
- UDP cho dữ liệu thời gian thực

9. BEST PRACTICES
- Sử dụng TCP cho dữ liệu quan trọng
- Sử dụng UDP cho dữ liệu thời gian thực
- Xem xét độ trễ và bandwidth
- Kiểm tra khả năng mở rộng
- Thử nghiệm với cả hai giao thức

Lựa chọn giữa TCP và UDP phụ thuộc vào yêu cầu cụ thể của ứng dụng. Hiểu rõ sự khác biệt giúp bạn đưa ra quyết định đúng đắn.`,
  },
  {
    id: "java-nio-channels",
    title: "Java NIO - Non-blocking I/O và Channels",
    excerpt:
      "Khám phá Java NIO, một cách hiệu quả hơn để xử lý I/O. Tìm hiểu về Channels, Buffers, Selectors và cách sử dụng chúng.",
    author: "Tác Giả Blog",
    date: "3 Tháng 10, 2024",
    readTime: "13 phút đọc",
    tags: ["Java", "NIO", "I/O"],
    content: `Java NIO (New I/O) cung cấp một cách hiệu quả hơn để xử lý I/O so với Java I/O truyền thống. Nó cho phép xử lý nhiều kết nối với ít thread hơn.

1. GIỚI THIỆU VỀ NIO
NIO cung cấp ba thành phần chính:
- Channels: Kênh truyền dữ liệu
- Buffers: Bộ đệm dữ liệu
- Selectors: Chọn các channel sẵn sàng

2. CHANNELS
Channel là một kênh truyền dữ liệu hai chiều:

import java.nio.channels.*;
import java.nio.*;

public class ChannelExample {
    public static void main(String[] args) throws IOException {
        // Tạo một ServerSocketChannel
        ServerSocketChannel serverChannel = ServerSocketChannel.open();
        serverChannel.bind(new InetSocketAddress(5000));
        serverChannel.configureBlocking(false);
        
        System.out.println("Server đang lắng nghe...");
        
        while (true) {
            SocketChannel clientChannel = serverChannel.accept();
            if (clientChannel != null) {
                System.out.println("Client đã kết nối");
                
                ByteBuffer buffer = ByteBuffer.allocate(1024);
                clientChannel.read(buffer);
                
                buffer.flip();
                String message = new String(buffer.array(), 0, buffer.limit());
                System.out.println("Nhận được: " + message);
                
                clientChannel.close();
            }
        }
    }
}

3. BUFFERS
Buffer là một container cho dữ liệu:

import java.nio.*;

public class BufferExample {
    public static void main(String[] args) {
        // Tạo một ByteBuffer
        ByteBuffer buffer = ByteBuffer.allocate(1024);
        
        // Ghi dữ liệu vào buffer
        buffer.put("Xin chào NIO".getBytes());
        
        // Chuyển sang chế độ đọc
        buffer.flip();
        
        // Đọc dữ liệu từ buffer
        while (buffer.hasRemaining()) {
            System.out.print((char) buffer.get());
        }
        
        // Xóa buffer
        buffer.clear();
    }
}

4. SELECTORS
Selector cho phép một thread quản lý nhiều channel:

import java.nio.channels.*;
import java.nio.*;
import java.util.*;

public class SelectorExample {
    public static void main(String[] args) throws IOException {
        Selector selector = Selector.open();
        ServerSocketChannel serverChannel = ServerSocketChannel.open();
        serverChannel.bind(new InetSocketAddress(5000));
        serverChannel.configureBlocking(false);
        
        serverChannel.register(selector, SelectionKey.OP_ACCEPT);
        
        System.out.println("Server đang lắng nghe...");
        
        while (true) {
            int readyChannels = selector.select();
            
            if (readyChannels == 0) continue;
            
            Set<SelectionKey> selectedKeys = selector.selectedKeys();
            Iterator<SelectionKey> keyIterator = selectedKeys.iterator();
            
            while (keyIterator.hasNext()) {
                SelectionKey key = keyIterator.next();
                
                if (key.isAcceptable()) {
                    ServerSocketChannel server = (ServerSocketChannel) key.channel();
                    SocketChannel client = server.accept();
                    client.configureBlocking(false);
                    client.register(selector, SelectionKey.OP_READ);
                    System.out.println("Client đã kết nối");
                } else if (key.isReadable()) {
                    SocketChannel client = (SocketChannel) key.channel();
                    ByteBuffer buffer = ByteBuffer.allocate(1024);
                    int bytesRead = client.read(buffer);
                    
                    if (bytesRead > 0) {
                        buffer.flip();
                        String message = new String(buffer.array(), 0, buffer.limit());
                        System.out.println("Nhận được: " + message);
                    } else if (bytesRead < 0) {
                        client.close();
                    }
                }
                
                keyIterator.remove();
            }
        }
    }
}

5. SO SÁNH JAVA I/O VÀ NIO

Tiêu chí           | Java I/O    | NIO
Blocking           | Có          | Không
Số thread          | Nhiều       | Ít
Scalability        | Thấp        | Cao
Độ phức tạp        | Thấp        | Cao
Hiệu suất          | Thấp        | Cao

6. BEST PRACTICES
- Sử dụng NIO cho các ứng dụng cần xử lý nhiều kết nối
- Sử dụng Java I/O cho các ứng dụng đơn giản
- Hiểu rõ về buffer position, limit, capacity
- Xử lý SelectionKey một cách cẩn thận
- Sử dụng framework như Netty để đơn giản hóa

7. NETTY FRAMEWORK
Netty là một framework xây dựng trên NIO:

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;

public class NettyServer {
    public static void main(String[] args) throws InterruptedException {
        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        
        try {
            ServerBootstrap bootstrap = new ServerBootstrap();
            bootstrap.group(bossGroup, workerGroup)
                .channel(NioServerSocketChannel.class)
                .childHandler(new ChannelInitializer<Channel>() {
                    @Override
                    protected void initChannel(Channel ch) {
                        // Thêm handlers
                    }
                });
            
            ChannelFuture future = bootstrap.bind(5000).sync();
            future.channel().closeFuture().sync();
        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }
}

Java NIO là một công nghệ mạnh mẽ cho lập trình mạng hiệu quả. Với sự hiểu biết vững chắc, bạn có thể xây dựng các server có khả năng mở rộng cao.`,
  },
  {
    id: "express-routing-middleware",
    title: "Express.js - Routing và Middleware trong Node.js",
    excerpt:
      "Tìm hiểu cách sử dụng Express.js để xây dựng các ứng dụng web. Bao gồm routing, middleware, error handling, và best practices.",
    author: "Tác Giả Blog",
    date: "1 Tháng 10, 2024",
    readTime: "10 phút đọc",
    tags: ["JavaScript", "Express", "Node.js"],
    content: `Express.js là một framework web phổ biến cho Node.js. Nó cung cấp các công cụ mạnh mẽ để xây dựng ứng dụng web và API.

1. GIỚI THIỆU VỀ EXPRESS
Express là một framework tối thiểu và linh hoạt. Nó cung cấp:
- Routing
- Middleware
- Template engines
- Static file serving

2. CÀI ĐẶT VÀ THIẾT LẬP CƠ BẢN

npm install express

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server đang chạy trên cổng 3000');
});

3. ROUTING CƠ BẢN

const express = require('express');
const app = express();

// GET request
app.get('/', (req, res) => {
    res.send('Trang chủ');
});

// POST request
app.post('/api/users', (req, res) => {
    res.json({ message: 'Người dùng đã được tạo' });
});

// PUT request
app.put('/api/users/:id', (req, res) => {
    res.json({ message: 'Người dùng đã được cập nhật' });
});

// DELETE request
app.delete('/api/users/:id', (req, res) => {
    res.json({ message: 'Người dùng đã được xóa' });
});

app.listen(3000);

4. ROUTE PARAMETERS

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ userId: userId });
});

app.get('/posts/:postId/comments/:commentId', (req, res) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    res.json({ postId, commentId });
});

5. QUERY PARAMETERS

app.get('/search', (req, res) => {
    const query = req.query.q;
    const limit = req.query.limit || 10;
    res.json({ query, limit });
});

// /search?q=nodejs&limit=20

6. MIDDLEWARE

// Middleware toàn cục
app.use((req, res, next) => {
    console.log('Request:', req.method, req.url);
    next();
});

// Middleware cho route cụ thể
app.get('/admin', (req, res, next) => {
    console.log('Kiểm tra quyền admin');
    next();
}, (req, res) => {
    res.send('Trang admin');
});

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Lỗi server' });
});

7. BODY PARSING

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    res.json({ name, email });
});

8. STATIC FILES

app.use(express.static('public'));

// Các file trong thư mục 'public' sẽ được phục vụ trực tiếp

9. TEMPLATE ENGINES

app.set('view engine', 'ejs');

app.get('/profile/:name', (req, res) => {
    res.render('profile', { name: req.params.name });
});

10. CORS

const cors = require('cors');
app.use(cors());

11. AUTHENTICATION MIDDLEWARE

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) return res.sendStatus(401);
    
    // Xác thực token
    next();
}

app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Dữ liệu được bảo vệ' });
});

12. ERROR HANDLING

app.get('/api/data', (req, res, next) => {
    try {
        // Xử lý logic
        throw new Error('Lỗi xử lý');
    } catch (error) {
        next(error);
    }
});

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

13. BEST PRACTICES
- Tổ chức code thành các module
- Sử dụng middleware một cách hiệu quả
- Xử lý lỗi một cách thích hợp
- Sử dụng environment variables
- Viết test cho các route

Express.js là một framework mạnh mẽ và linh hoạt. Với sự hiểu biết vững chắc, bạn có thể xây dựng các ứng dụng web chuyên nghiệp.`,
  },
  {
    id: "network-security-basics",
    title: "Bảo Mật Lập Trình Mạng - Các Nguyên Tắc Cơ Bản",
    excerpt:
      "Tìm hiểu các nguyên tắc cơ bản về bảo mật lập trình mạng, bao gồm SSL/TLS, mã hóa, xác thực, và các lỗ hổng phổ biến.",
    author: "Tác Giả Blog",
    date: "28 Tháng 9, 2024",
    readTime: "12 phút đọc",
    tags: ["Bảo Mật", "Mạng", "SSL/TLS"],
    content: `Bảo mật là một khía cạnh quan trọng của lập trình mạng. Hiểu rõ các nguyên tắc cơ bản giúp bạn xây dựng các ứng dụng an toàn.

1. GIỚI THIỆU VỀ BẢO MẬT MẠNG
Bảo mật mạng bao gồm:
- Bảo mật dữ liệu (Confidentiality)
- Toàn vẹn dữ liệu (Integrity)
- Xác thực (Authentication)
- Không từ chối (Non-repudiation)

2. MÃ HÓA
Mã hóa là quá trình chuyển đổi dữ liệu thành một dạng không thể đọc được mà không có khóa.

Hai loại mã hóa chính:
- Mã hóa đối xứng: Sử dụng cùng một khóa để mã hóa và giải mã
- Mã hóa bất đối xứng: Sử dụng hai khóa khác nhau (public key, private key)

3. SSL/TLS
SSL/TLS là giao thức bảo mật cho truyền thông qua mạng:
- Mã hóa dữ liệu
- Xác thực server
- Đảm bảo toàn vẹn dữ liệu

4. HTTPS VỚI NODE.JS

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('certificate.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Kết nối HTTPS an toàn');
}).listen(443);

5. HTTPS VỚI JAVA

import javax.net.ssl.SSLServerSocket;
import javax.net.ssl.SSLServerSocketFactory;
import java.io.*;

public class SecureServer {
    public static void main(String[] args) throws IOException {
        System.setProperty("javax.net.ssl.keyStore", "keystore.jks");
        System.setProperty("javax.net.ssl.keyStorePassword", "password");
        
        SSLServerSocketFactory factory = 
            (SSLServerSocketFactory) SSLServerSocketFactory.getDefault();
        SSLServerSocket serverSocket = 
            (SSLServerSocket) factory.createServerSocket(443);
        
        System.out.println("Secure server đang lắng nghe...");
        
        while (true) {
            SSLSocket socket = (SSLSocket) serverSocket.accept();
            // Xử lý client
        }
    }
}

6. XÁC THỰC
Xác thực là quá trình xác minh danh tính của người dùng:

// Xác thực cơ bản
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Kiểm tra username và password
    if (username === 'admin' && password === 'password') {
        res.json({ token: 'jwt-token' });
    } else {
        res.status(401).json({ error: 'Xác thực thất bại' });
    }
});

7. JWT (JSON WEB TOKEN)

const jwt = require('jsonwebtoken');

// Tạo token
const token = jwt.sign({ userId: 123 }, 'secret-key', { expiresIn: '1h' });

// Xác thực token
app.use((req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) return res.sendStatus(401);
    
    jwt.verify(token, 'secret-key', (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.userId = decoded.userId;
        next();
    });
});

8. HASH PASSWORD

const bcrypt = require('bcrypt');

// Hash password
const hashedPassword = await bcrypt.hash('password', 10);

// So sánh password
const isMatch = await bcrypt.compare('password', hashedPassword);

9. CÁC LỖ HỔ PHỔ BIẾN

a) SQL Injection
Sai: SELECT * FROM users WHERE id = ' + userId + '
Đúng: SELECT * FROM users WHERE id = ?

b) Cross-Site Scripting (XSS)
Sai: res.send('<h1>' + userInput + '</h1>');
Đúng: res.send('<h1>' + escapeHtml(userInput) + '</h1>');

c) Cross-Site Request Forgery (CSRF)
Sử dụng CSRF tokens

d) Man-in-the-Middle (MITM)
Sử dụng HTTPS/TLS

10. BEST PRACTICES
- Luôn sử dụng HTTPS
- Hash password với bcrypt hoặc argon2
- Xác thực tất cả input
- Sử dụng JWT hoặc session tokens
- Giữ dependencies cập nhật
- Sử dụng environment variables cho secrets
- Implement rate limiting
- Log và monitor các hoạt động bất thường

Bảo mật là một quá trình liên tục. Luôn cập nhật kiến thức về các lỗ hổ mới và best practices.`,
  },
  {
    id: "rest-api-design",
    title: "Thiết Kế REST API - Best Practices và Patterns",
    excerpt:
      "Tìm hiểu cách thiết kế REST API chuyên nghiệp. Bao gồm naming conventions, status codes, versioning, pagination, và error handling.",
    author: "Tác Giả Blog",
    date: "25 Tháng 9, 2024",
    readTime: "11 phút đọc",
    tags: ["API", "REST", "Design"],
    content: `REST (Representational State Transfer) là một kiến trúc phổ biến cho xây dựng API. Thiết kế REST API tốt là quan trọng cho sự thành công của ứng dụng.

1. NGUYÊN TẮC REST
- Client-Server: Tách biệt client và server
- Stateless: Mỗi request chứa đủ thông tin
- Cacheable: Response có thể được cache
- Uniform Interface: Interface thống nhất
- Layered System: Hệ thống phân lớp
- Code on Demand: Tùy chọn

2. NAMING CONVENTIONS
Sử dụng danh từ cho endpoints, không phải động từ:

Sai:
GET /getUsers
POST /createUser
PUT /updateUser
DELETE /deleteUser

Đúng:
GET /users
POST /users
PUT /users/:id
DELETE /users/:id

3. HTTP METHODS
- GET: Lấy dữ liệu
- POST: Tạo dữ liệu mới
- PUT: Cập nhật toàn bộ dữ liệu
- PATCH: Cập nhật một phần dữ liệu
- DELETE: Xóa dữ liệu

4. STATUS CODES
- 200 OK: Thành công
- 201 Created: Tạo mới thành công
- 204 No Content: Thành công nhưng không có nội dung
- 400 Bad Request: Request không hợp lệ
- 401 Unauthorized: Chưa xác thực
- 403 Forbidden: Không có quyền
- 404 Not Found: Không tìm thấy
- 500 Internal Server Error: Lỗi server

5. VERSIONING
Có ba cách versioning phổ biến:

a) URL versioning
GET /api/v1/users
GET /api/v2/users

b) Header versioning
GET /api/users
Header: API-Version: 1

c) Query parameter versioning
GET /api/users?version=1

6. PAGINATION

GET /api/users?page=1&limit=10

Response:
{
    "data": [...],
    "pagination": {
        "page": 1,
        "limit": 10,
        "total": 100,
        "pages": 10
    }
}

7. FILTERING VÀ SORTING

GET /api/users?status=active&sort=name

8. ERROR HANDLING

{
    "error": {
        "code": "INVALID_REQUEST",
        "message": "Request không hợp lệ",
        "details": {
            "field": "email",
            "issue": "Email không hợp lệ"
        }
    }
}

9. AUTHENTICATION

// Bearer token
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...

// Basic auth
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

10. RATE LIMITING

app.use((req, res, next) => {
    const limit = 100; // 100 requests per hour
    const key = req.ip;
    
    // Kiểm tra rate limit
    if (requestCount[key] > limit) {
        res.status(429).json({ error: 'Too many requests' });
    } else {
        requestCount[key]++;
        next();
    }
});

11. CACHING

app.get('/api/users/:id', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300');
    res.json(user);
});

12. CORS

const cors = require('cors');
app.use(cors({
    origin: 'https://example.com',
    credentials: true
}));

13. DOCUMENTATION
Sử dụng Swagger/OpenAPI:

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lấy danh sách người dùng
 *     responses:
 *       200:
 *         description: Danh sách người dùng
 */
app.get('/api/users', (req, res) => {
    res.json(users);
});

14. BEST PRACTICES
- Sử dụng HTTPS
- Implement authentication
- Validate input
- Implement rate limiting
- Provide clear error messages
- Document API
- Use consistent naming
- Version API
- Implement caching
- Monitor API usage

Thiết kế REST API tốt là một kỹ năng quan trọng. Với sự hiểu biết vững chắc, bạn có thể xây dựng các API chuyên nghiệp và dễ sử dụng.`,
  },
  {
    id: "database-connection-pooling",
    title: "Connection Pooling - Tối Ưu Hóa Kết Nối Cơ Sở Dữ Liệu",
    excerpt:
      "Tìm hiểu về connection pooling, tại sao nó quan trọng, và cách triển khai nó với Java và Node.js để tối ưu hóa hiệu suất.",
    author: "Tác Giả Blog",
    date: "22 Tháng 9, 2024",
    readTime: "10 phút đọc",
    tags: ["Database", "Performance", "Java"],
    content: `Connection pooling là một kỹ thuật quan trọng để tối ưu hóa hiệu suất ứng dụng. Nó giúp giảm overhead của việc tạo kết nối mới.

1. GIỚI THIỆU VỀ CONNECTION POOLING
Connection pooling là việc duy trì một tập hợp các kết nối cơ sở dữ liệu sẵn sàng để sử dụng.

Lợi ích:
- Giảm overhead tạo kết nối
- Cải thiện hiệu suất
- Quản lý tài nguyên tốt hơn
- Tăng khả năng mở rộng

2. CÁCH HOẠT ĐỘNG
1. Ứng dụng yêu cầu kết nối từ pool
2. Pool trả về một kết nối sẵn sàng
3. Ứng dụng sử dụng kết nối
4. Ứng dụng trả lại kết nối cho pool
5. Pool tái sử dụng kết nối

3. CONNECTION POOLING VỚI JAVA - HIKARICP

<!-- pom.xml -->
<dependency>
    <groupId>com.zaxxer</groupId>
    <artifactId>HikariCP</artifactId>
    <version>5.0.1</version>
</dependency>

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import java.sql.*;

public class DatabaseConnection {
    private static HikariDataSource dataSource;
    
    static {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        config.setUsername("root");
        config.setPassword("password");
        config.setMaximumPoolSize(10);
        config.setMinimumIdle(5);
        config.setConnectionTimeout(30000);
        config.setIdleTimeout(600000);
        config.setMaxLifetime(1800000);
        
        dataSource = new HikariDataSource(config);
    }
    
    public static Connection getConnection() throws SQLException {
        return dataSource.getConnection();
    }
    
    public static void closePool() {
        if (dataSource != null) {
            dataSource.close();
        }
    }
}

// Sử dụng
public class UserDAO {
    public User getUserById(int id) throws SQLException {
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE id = ?")) {
            
            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();
            
            if (rs.next()) {
                return new User(rs.getInt("id"), rs.getString("name"));
            }
        }
        return null;
    }
}

4. CONNECTION POOLING VỚI NODE.JS - MYSQL2

npm install mysql2

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function getUser(id) {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.execute(
            'SELECT * FROM users WHERE id = ?',
            [id]
        );
        return rows[0];
    } finally {
        connection.release();
    }
}

5. CẤU HÌNH POOL

Các tham số quan trọng:
- Maximum Pool Size: Số kết nối tối đa
- Minimum Idle: Số kết nối tối thiểu
- Connection Timeout: Thời gian chờ kết nối
- Idle Timeout: Thời gian kết nối không hoạt động
- Max Lifetime: Thời gian sống tối đa của kết nối

6. MONITORING POOL

// Kiểm tra trạng thái pool
public class PoolMonitor {
    public static void monitorPool(HikariDataSource dataSource) {
        System.out.println("Active connections: " + dataSource.getHikariPoolMXBean().getActiveConnections());
        System.out.println("Idle connections: " + dataSource.getHikariPoolMXBean().getIdleConnections());
        System.out.println("Total connections: " + dataSource.getHikariPoolMXBean().getTotalConnections());
        System.out.println("Pending threads: " + dataSource.getHikariPoolMXBean().getThreadsAwaitingConnection());
    }
}

7. BEST PRACTICES
- Sử dụng connection pooling
- Đặt kích thước pool phù hợp
- Luôn đóng kết nối
- Sử dụng try-with-resources
- Monitor pool metrics
- Xử lý connection timeout
- Sử dụng prepared statements
- Tránh connection leaks

8. TROUBLESHOOTING
- Connection timeout: Tăng pool size hoặc timeout
- Connection leak: Kiểm tra code không đóng kết nối
- Slow queries: Optimize queries hoặc tăng pool size
- High memory usage: Giảm pool size

Connection pooling là một kỹ thuật quan trọng cho bất kỳ ứng dụng nào sử dụng cơ sở dữ liệu. Với cấu hình đúng, nó có thể cải thiện hiệu suất đáng kể.`,
  },
]
