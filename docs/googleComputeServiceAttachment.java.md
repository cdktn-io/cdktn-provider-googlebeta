# `googleComputeServiceAttachment` Submodule <a name="`googleComputeServiceAttachment` Submodule" id="@cdktn/provider-google-beta.googleComputeServiceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeServiceAttachment <a name="GoogleComputeServiceAttachment" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment google_compute_service_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachment;

GoogleComputeServiceAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionPreference(java.lang.String)
    .enableProxyProtocol(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
    .natSubnets(java.util.List<java.lang.String>)
    .targetService(java.lang.String)
//  .consumerAcceptLists(IResolvable|java.util.List<GoogleComputeServiceAttachmentConsumerAcceptLists>)
//  .consumerRejectLists(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .domainNames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .propagatedConnectionLimit(java.lang.Number)
//  .reconcileConnections(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .sendPropagatedConnectionLimitIfZero(java.lang.Boolean|IResolvable)
//  .showNatIps(java.lang.Boolean|IResolvable)
//  .timeouts(GoogleComputeServiceAttachmentTimeouts)
//  .tunnelingConfig(GoogleComputeServiceAttachmentTunnelingConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.connectionPreference">connectionPreference</a></code> | <code>java.lang.String</code> | The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.enableProxyProtocol">enableProxyProtocol</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.natSubnets">natSubnets</a></code> | <code>java.util.List<java.lang.String></code> | An array of subnets that is provided for NAT in this service attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.targetService">targetService</a></code> | <code>java.lang.String</code> | The URL of a service serving the endpoint identified by this service attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.consumerAcceptLists">consumerAcceptLists</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>></code> | consumer_accept_lists block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.consumerRejectLists">consumerRejectLists</a></code> | <code>java.util.List<java.lang.String></code> | An array of projects that are not allowed to connect to this service attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.domainNames">domainNames</a></code> | <code>java.util.List<java.lang.String></code> | If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#id GoogleComputeServiceAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#project GoogleComputeServiceAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.propagatedConnectionLimit">propagatedConnectionLimit</a></code> | <code>java.lang.Number</code> | The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.reconcileConnections">reconcileConnections</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | URL of the region where the resource resides. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.sendPropagatedConnectionLimitIfZero">sendPropagatedConnectionLimitIfZero</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls the behavior of propagated_connection_limit. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.showNatIps">showNatIps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | NOTE: This field is temporarily non-functional due to an underlying API issue. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.tunnelingConfig">tunnelingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig">GoogleComputeServiceAttachmentTunnelingConfig</a></code> | tunneling_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionPreference`<sup>Required</sup> <a name="connectionPreference" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.connectionPreference"></a>

- *Type:* java.lang.String

The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#connection_preference GoogleComputeServiceAttachment#connection_preference}

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.enableProxyProtocol"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#enable_proxy_protocol GoogleComputeServiceAttachment#enable_proxy_protocol}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#name GoogleComputeServiceAttachment#name}

---

##### `natSubnets`<sup>Required</sup> <a name="natSubnets" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.natSubnets"></a>

- *Type:* java.util.List<java.lang.String>

An array of subnets that is provided for NAT in this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#nat_subnets GoogleComputeServiceAttachment#nat_subnets}

---

##### `targetService`<sup>Required</sup> <a name="targetService" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.targetService"></a>

- *Type:* java.lang.String

The URL of a service serving the endpoint identified by this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#target_service GoogleComputeServiceAttachment#target_service}

---

##### `consumerAcceptLists`<sup>Optional</sup> <a name="consumerAcceptLists" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.consumerAcceptLists"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>>

consumer_accept_lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#consumer_accept_lists GoogleComputeServiceAttachment#consumer_accept_lists}

---

##### `consumerRejectLists`<sup>Optional</sup> <a name="consumerRejectLists" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.consumerRejectLists"></a>

- *Type:* java.util.List<java.lang.String>

An array of projects that are not allowed to connect to this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#consumer_reject_lists GoogleComputeServiceAttachment#consumer_reject_lists}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#deletion_policy GoogleComputeServiceAttachment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#description GoogleComputeServiceAttachment#description}

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.domainNames"></a>

- *Type:* java.util.List<java.lang.String>

If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.

For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#domain_names GoogleComputeServiceAttachment#domain_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#id GoogleComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#project GoogleComputeServiceAttachment#project}.

---

##### `propagatedConnectionLimit`<sup>Optional</sup> <a name="propagatedConnectionLimit" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.propagatedConnectionLimit"></a>

- *Type:* java.lang.Number

The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center.

This limit lets the service producer limit how many propagated Private Service Connect connections can be established to this service attachment from a single consumer.

If the connection preference of the service attachment is ACCEPT_MANUAL, the limit applies to each project or network that is listed in the consumer accept list.
If the connection preference of the service attachment is ACCEPT_AUTOMATIC, the limit applies to each project that contains a connected endpoint.

If unspecified, the default propagated connection limit is 250. To explicitly send a zero value, set 'send_propagated_connection_limit_if_zero = true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#propagated_connection_limit GoogleComputeServiceAttachment#propagated_connection_limit}

---

##### `reconcileConnections`<sup>Optional</sup> <a name="reconcileConnections" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.reconcileConnections"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.

If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#reconcile_connections GoogleComputeServiceAttachment#reconcile_connections}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#region GoogleComputeServiceAttachment#region}

---

##### `sendPropagatedConnectionLimitIfZero`<sup>Optional</sup> <a name="sendPropagatedConnectionLimitIfZero" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.sendPropagatedConnectionLimitIfZero"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls the behavior of propagated_connection_limit.

When false, setting propagated_connection_limit to zero causes the provider to use to the API's default value.
When true, the provider will set propagated_connection_limit to zero.
Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#send_propagated_connection_limit_if_zero GoogleComputeServiceAttachment#send_propagated_connection_limit_if_zero}

---

##### `showNatIps`<sup>Optional</sup> <a name="showNatIps" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.showNatIps"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

NOTE: This field is temporarily non-functional due to an underlying API issue.

Any value provided here will be ignored until the API issue is resolved, expected around 2026-03.
[If true, show NAT IPs of all connected endpoints.]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#show_nat_ips GoogleComputeServiceAttachment#show_nat_ips}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#timeouts GoogleComputeServiceAttachment#timeouts}

---

##### `tunnelingConfig`<sup>Optional</sup> <a name="tunnelingConfig" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.tunnelingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig">GoogleComputeServiceAttachmentTunnelingConfig</a>

tunneling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#tunneling_config GoogleComputeServiceAttachment#tunneling_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putConsumerAcceptLists">putConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putTunnelingConfig">putTunnelingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetConsumerAcceptLists">resetConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetConsumerRejectLists">resetConsumerRejectLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDomainNames">resetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetPropagatedConnectionLimit">resetPropagatedConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetReconcileConnections">resetReconcileConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetSendPropagatedConnectionLimitIfZero">resetSendPropagatedConnectionLimitIfZero</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetShowNatIps">resetShowNatIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetTunnelingConfig">resetTunnelingConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConsumerAcceptLists` <a name="putConsumerAcceptLists" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putConsumerAcceptLists"></a>

```java
public void putConsumerAcceptLists(IResolvable|java.util.List<GoogleComputeServiceAttachmentConsumerAcceptLists> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putConsumerAcceptLists.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeServiceAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a>

---

##### `putTunnelingConfig` <a name="putTunnelingConfig" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putTunnelingConfig"></a>

```java
public void putTunnelingConfig(GoogleComputeServiceAttachmentTunnelingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putTunnelingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig">GoogleComputeServiceAttachmentTunnelingConfig</a>

---

##### `resetConsumerAcceptLists` <a name="resetConsumerAcceptLists" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetConsumerAcceptLists"></a>

```java
public void resetConsumerAcceptLists()
```

##### `resetConsumerRejectLists` <a name="resetConsumerRejectLists" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetConsumerRejectLists"></a>

```java
public void resetConsumerRejectLists()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDomainNames` <a name="resetDomainNames" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDomainNames"></a>

```java
public void resetDomainNames()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetProject"></a>

```java
public void resetProject()
```

##### `resetPropagatedConnectionLimit` <a name="resetPropagatedConnectionLimit" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetPropagatedConnectionLimit"></a>

```java
public void resetPropagatedConnectionLimit()
```

##### `resetReconcileConnections` <a name="resetReconcileConnections" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetReconcileConnections"></a>

```java
public void resetReconcileConnections()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSendPropagatedConnectionLimitIfZero` <a name="resetSendPropagatedConnectionLimitIfZero" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetSendPropagatedConnectionLimitIfZero"></a>

```java
public void resetSendPropagatedConnectionLimitIfZero()
```

##### `resetShowNatIps` <a name="resetShowNatIps" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetShowNatIps"></a>

```java
public void resetShowNatIps()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTunnelingConfig` <a name="resetTunnelingConfig" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetTunnelingConfig"></a>

```java
public void resetTunnelingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeServiceAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachment;

GoogleComputeServiceAttachment.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachment;

GoogleComputeServiceAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachment;

GoogleComputeServiceAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachment;

GoogleComputeServiceAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeServiceAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeServiceAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeServiceAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeServiceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeServiceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectedEndpoints">connectedEndpoints</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList">GoogleComputeServiceAttachmentConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerAcceptLists">consumerAcceptLists</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList">GoogleComputeServiceAttachmentConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.pscServiceAttachmentId">pscServiceAttachmentId</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList">GoogleComputeServiceAttachmentPscServiceAttachmentIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference">GoogleComputeServiceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.tunnelingConfig">tunnelingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference">GoogleComputeServiceAttachmentTunnelingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectionPreferenceInput">connectionPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerAcceptListsInput">consumerAcceptListsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerRejectListsInput">consumerRejectListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.domainNamesInput">domainNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.enableProxyProtocolInput">enableProxyProtocolInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.natSubnetsInput">natSubnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.propagatedConnectionLimitInput">propagatedConnectionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.reconcileConnectionsInput">reconcileConnectionsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZeroInput">sendPropagatedConnectionLimitIfZeroInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.showNatIpsInput">showNatIpsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.targetServiceInput">targetServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.tunnelingConfigInput">tunnelingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig">GoogleComputeServiceAttachmentTunnelingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectionPreference">connectionPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerRejectLists">consumerRejectLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.domainNames">domainNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.natSubnets">natSubnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.propagatedConnectionLimit">propagatedConnectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.reconcileConnections">reconcileConnections</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZero">sendPropagatedConnectionLimitIfZero</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.showNatIps">showNatIps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.targetService">targetService</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectedEndpoints`<sup>Required</sup> <a name="connectedEndpoints" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectedEndpoints"></a>

```java
public GoogleComputeServiceAttachmentConnectedEndpointsList getConnectedEndpoints();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList">GoogleComputeServiceAttachmentConnectedEndpointsList</a>

---

##### `consumerAcceptLists`<sup>Required</sup> <a name="consumerAcceptLists" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerAcceptLists"></a>

```java
public GoogleComputeServiceAttachmentConsumerAcceptListsList getConsumerAcceptLists();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList">GoogleComputeServiceAttachmentConsumerAcceptListsList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `pscServiceAttachmentId`<sup>Required</sup> <a name="pscServiceAttachmentId" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.pscServiceAttachmentId"></a>

```java
public GoogleComputeServiceAttachmentPscServiceAttachmentIdList getPscServiceAttachmentId();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList">GoogleComputeServiceAttachmentPscServiceAttachmentIdList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.timeouts"></a>

```java
public GoogleComputeServiceAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference">GoogleComputeServiceAttachmentTimeoutsOutputReference</a>

---

##### `tunnelingConfig`<sup>Required</sup> <a name="tunnelingConfig" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.tunnelingConfig"></a>

```java
public GoogleComputeServiceAttachmentTunnelingConfigOutputReference getTunnelingConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference">GoogleComputeServiceAttachmentTunnelingConfigOutputReference</a>

---

##### `connectionPreferenceInput`<sup>Optional</sup> <a name="connectionPreferenceInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectionPreferenceInput"></a>

```java
public java.lang.String getConnectionPreferenceInput();
```

- *Type:* java.lang.String

---

##### `consumerAcceptListsInput`<sup>Optional</sup> <a name="consumerAcceptListsInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerAcceptListsInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeServiceAttachmentConsumerAcceptLists> getConsumerAcceptListsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>>

---

##### `consumerRejectListsInput`<sup>Optional</sup> <a name="consumerRejectListsInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerRejectListsInput"></a>

```java
public java.util.List<java.lang.String> getConsumerRejectListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainNamesInput`<sup>Optional</sup> <a name="domainNamesInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.domainNamesInput"></a>

```java
public java.util.List<java.lang.String> getDomainNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableProxyProtocolInput`<sup>Optional</sup> <a name="enableProxyProtocolInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.enableProxyProtocolInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableProxyProtocolInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `natSubnetsInput`<sup>Optional</sup> <a name="natSubnetsInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.natSubnetsInput"></a>

```java
public java.util.List<java.lang.String> getNatSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propagatedConnectionLimitInput`<sup>Optional</sup> <a name="propagatedConnectionLimitInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.propagatedConnectionLimitInput"></a>

```java
public java.lang.Number getPropagatedConnectionLimitInput();
```

- *Type:* java.lang.Number

---

##### `reconcileConnectionsInput`<sup>Optional</sup> <a name="reconcileConnectionsInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.reconcileConnectionsInput"></a>

```java
public java.lang.Boolean|IResolvable getReconcileConnectionsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sendPropagatedConnectionLimitIfZeroInput`<sup>Optional</sup> <a name="sendPropagatedConnectionLimitIfZeroInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZeroInput"></a>

```java
public java.lang.Boolean|IResolvable getSendPropagatedConnectionLimitIfZeroInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `showNatIpsInput`<sup>Optional</sup> <a name="showNatIpsInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.showNatIpsInput"></a>

```java
public java.lang.Boolean|IResolvable getShowNatIpsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `targetServiceInput`<sup>Optional</sup> <a name="targetServiceInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.targetServiceInput"></a>

```java
public java.lang.String getTargetServiceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleComputeServiceAttachmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a>

---

##### `tunnelingConfigInput`<sup>Optional</sup> <a name="tunnelingConfigInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.tunnelingConfigInput"></a>

```java
public GoogleComputeServiceAttachmentTunnelingConfig getTunnelingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig">GoogleComputeServiceAttachmentTunnelingConfig</a>

---

##### `connectionPreference`<sup>Required</sup> <a name="connectionPreference" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectionPreference"></a>

```java
public java.lang.String getConnectionPreference();
```

- *Type:* java.lang.String

---

##### `consumerRejectLists`<sup>Required</sup> <a name="consumerRejectLists" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerRejectLists"></a>

```java
public java.util.List<java.lang.String> getConsumerRejectLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.domainNames"></a>

```java
public java.util.List<java.lang.String> getDomainNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.enableProxyProtocol"></a>

```java
public java.lang.Boolean|IResolvable getEnableProxyProtocol();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `natSubnets`<sup>Required</sup> <a name="natSubnets" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.natSubnets"></a>

```java
public java.util.List<java.lang.String> getNatSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `propagatedConnectionLimit`<sup>Required</sup> <a name="propagatedConnectionLimit" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.propagatedConnectionLimit"></a>

```java
public java.lang.Number getPropagatedConnectionLimit();
```

- *Type:* java.lang.Number

---

##### `reconcileConnections`<sup>Required</sup> <a name="reconcileConnections" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.reconcileConnections"></a>

```java
public java.lang.Boolean|IResolvable getReconcileConnections();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sendPropagatedConnectionLimitIfZero`<sup>Required</sup> <a name="sendPropagatedConnectionLimitIfZero" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZero"></a>

```java
public java.lang.Boolean|IResolvable getSendPropagatedConnectionLimitIfZero();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `showNatIps`<sup>Required</sup> <a name="showNatIps" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.showNatIps"></a>

```java
public java.lang.Boolean|IResolvable getShowNatIps();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `targetService`<sup>Required</sup> <a name="targetService" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.targetService"></a>

```java
public java.lang.String getTargetService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeServiceAttachmentConfig <a name="GoogleComputeServiceAttachmentConfig" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentConfig;

GoogleComputeServiceAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionPreference(java.lang.String)
    .enableProxyProtocol(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
    .natSubnets(java.util.List<java.lang.String>)
    .targetService(java.lang.String)
//  .consumerAcceptLists(IResolvable|java.util.List<GoogleComputeServiceAttachmentConsumerAcceptLists>)
//  .consumerRejectLists(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .domainNames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .propagatedConnectionLimit(java.lang.Number)
//  .reconcileConnections(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .sendPropagatedConnectionLimitIfZero(java.lang.Boolean|IResolvable)
//  .showNatIps(java.lang.Boolean|IResolvable)
//  .timeouts(GoogleComputeServiceAttachmentTimeouts)
//  .tunnelingConfig(GoogleComputeServiceAttachmentTunnelingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.connectionPreference">connectionPreference</a></code> | <code>java.lang.String</code> | The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.natSubnets">natSubnets</a></code> | <code>java.util.List<java.lang.String></code> | An array of subnets that is provided for NAT in this service attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.targetService">targetService</a></code> | <code>java.lang.String</code> | The URL of a service serving the endpoint identified by this service attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.consumerAcceptLists">consumerAcceptLists</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>></code> | consumer_accept_lists block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.consumerRejectLists">consumerRejectLists</a></code> | <code>java.util.List<java.lang.String></code> | An array of projects that are not allowed to connect to this service attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.domainNames">domainNames</a></code> | <code>java.util.List<java.lang.String></code> | If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#id GoogleComputeServiceAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#project GoogleComputeServiceAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.propagatedConnectionLimit">propagatedConnectionLimit</a></code> | <code>java.lang.Number</code> | The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.reconcileConnections">reconcileConnections</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | URL of the region where the resource resides. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.sendPropagatedConnectionLimitIfZero">sendPropagatedConnectionLimitIfZero</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls the behavior of propagated_connection_limit. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.showNatIps">showNatIps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | NOTE: This field is temporarily non-functional due to an underlying API issue. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.tunnelingConfig">tunnelingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig">GoogleComputeServiceAttachmentTunnelingConfig</a></code> | tunneling_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionPreference`<sup>Required</sup> <a name="connectionPreference" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.connectionPreference"></a>

```java
public java.lang.String getConnectionPreference();
```

- *Type:* java.lang.String

The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#connection_preference GoogleComputeServiceAttachment#connection_preference}

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.enableProxyProtocol"></a>

```java
public java.lang.Boolean|IResolvable getEnableProxyProtocol();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#enable_proxy_protocol GoogleComputeServiceAttachment#enable_proxy_protocol}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#name GoogleComputeServiceAttachment#name}

---

##### `natSubnets`<sup>Required</sup> <a name="natSubnets" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.natSubnets"></a>

```java
public java.util.List<java.lang.String> getNatSubnets();
```

- *Type:* java.util.List<java.lang.String>

An array of subnets that is provided for NAT in this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#nat_subnets GoogleComputeServiceAttachment#nat_subnets}

---

##### `targetService`<sup>Required</sup> <a name="targetService" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.targetService"></a>

```java
public java.lang.String getTargetService();
```

- *Type:* java.lang.String

The URL of a service serving the endpoint identified by this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#target_service GoogleComputeServiceAttachment#target_service}

---

##### `consumerAcceptLists`<sup>Optional</sup> <a name="consumerAcceptLists" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.consumerAcceptLists"></a>

```java
public IResolvable|java.util.List<GoogleComputeServiceAttachmentConsumerAcceptLists> getConsumerAcceptLists();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>>

consumer_accept_lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#consumer_accept_lists GoogleComputeServiceAttachment#consumer_accept_lists}

---

##### `consumerRejectLists`<sup>Optional</sup> <a name="consumerRejectLists" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.consumerRejectLists"></a>

```java
public java.util.List<java.lang.String> getConsumerRejectLists();
```

- *Type:* java.util.List<java.lang.String>

An array of projects that are not allowed to connect to this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#consumer_reject_lists GoogleComputeServiceAttachment#consumer_reject_lists}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#deletion_policy GoogleComputeServiceAttachment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#description GoogleComputeServiceAttachment#description}

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.domainNames"></a>

```java
public java.util.List<java.lang.String> getDomainNames();
```

- *Type:* java.util.List<java.lang.String>

If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.

For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#domain_names GoogleComputeServiceAttachment#domain_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#id GoogleComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#project GoogleComputeServiceAttachment#project}.

---

##### `propagatedConnectionLimit`<sup>Optional</sup> <a name="propagatedConnectionLimit" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.propagatedConnectionLimit"></a>

```java
public java.lang.Number getPropagatedConnectionLimit();
```

- *Type:* java.lang.Number

The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center.

This limit lets the service producer limit how many propagated Private Service Connect connections can be established to this service attachment from a single consumer.

If the connection preference of the service attachment is ACCEPT_MANUAL, the limit applies to each project or network that is listed in the consumer accept list.
If the connection preference of the service attachment is ACCEPT_AUTOMATIC, the limit applies to each project that contains a connected endpoint.

If unspecified, the default propagated connection limit is 250. To explicitly send a zero value, set 'send_propagated_connection_limit_if_zero = true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#propagated_connection_limit GoogleComputeServiceAttachment#propagated_connection_limit}

---

##### `reconcileConnections`<sup>Optional</sup> <a name="reconcileConnections" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.reconcileConnections"></a>

```java
public java.lang.Boolean|IResolvable getReconcileConnections();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.

If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#reconcile_connections GoogleComputeServiceAttachment#reconcile_connections}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#region GoogleComputeServiceAttachment#region}

---

##### `sendPropagatedConnectionLimitIfZero`<sup>Optional</sup> <a name="sendPropagatedConnectionLimitIfZero" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.sendPropagatedConnectionLimitIfZero"></a>

```java
public java.lang.Boolean|IResolvable getSendPropagatedConnectionLimitIfZero();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls the behavior of propagated_connection_limit.

When false, setting propagated_connection_limit to zero causes the provider to use to the API's default value.
When true, the provider will set propagated_connection_limit to zero.
Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#send_propagated_connection_limit_if_zero GoogleComputeServiceAttachment#send_propagated_connection_limit_if_zero}

---

##### `showNatIps`<sup>Optional</sup> <a name="showNatIps" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.showNatIps"></a>

```java
public java.lang.Boolean|IResolvable getShowNatIps();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

NOTE: This field is temporarily non-functional due to an underlying API issue.

Any value provided here will be ignored until the API issue is resolved, expected around 2026-03.
[If true, show NAT IPs of all connected endpoints.]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#show_nat_ips GoogleComputeServiceAttachment#show_nat_ips}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.timeouts"></a>

```java
public GoogleComputeServiceAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#timeouts GoogleComputeServiceAttachment#timeouts}

---

##### `tunnelingConfig`<sup>Optional</sup> <a name="tunnelingConfig" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.tunnelingConfig"></a>

```java
public GoogleComputeServiceAttachmentTunnelingConfig getTunnelingConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig">GoogleComputeServiceAttachmentTunnelingConfig</a>

tunneling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#tunneling_config GoogleComputeServiceAttachment#tunneling_config}

---

### GoogleComputeServiceAttachmentConnectedEndpoints <a name="GoogleComputeServiceAttachmentConnectedEndpoints" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentConnectedEndpoints;

GoogleComputeServiceAttachmentConnectedEndpoints.builder()
    .build();
```


### GoogleComputeServiceAttachmentConsumerAcceptLists <a name="GoogleComputeServiceAttachmentConsumerAcceptLists" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentConsumerAcceptLists;

GoogleComputeServiceAttachmentConsumerAcceptLists.builder()
    .connectionLimit(java.lang.Number)
//  .endpointUrl(java.lang.String)
//  .networkUrl(java.lang.String)
//  .projectIdOrNum(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | The number of consumer forwarding rules the consumer project can create. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.endpointUrl">endpointUrl</a></code> | <code>java.lang.String</code> | The endpoint that is allowed to connect to this service attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.networkUrl">networkUrl</a></code> | <code>java.lang.String</code> | The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum">projectIdOrNum</a></code> | <code>java.lang.String</code> | A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit"></a>

```java
public java.lang.Number getConnectionLimit();
```

- *Type:* java.lang.Number

The number of consumer forwarding rules the consumer project can create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#connection_limit GoogleComputeServiceAttachment#connection_limit}

---

##### `endpointUrl`<sup>Optional</sup> <a name="endpointUrl" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.endpointUrl"></a>

```java
public java.lang.String getEndpointUrl();
```

- *Type:* java.lang.String

The endpoint that is allowed to connect to this service attachment.

Only one of project_id_or_num, network_url and endpoint_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#endpoint_url GoogleComputeServiceAttachment#endpoint_url}

---

##### `networkUrl`<sup>Optional</sup> <a name="networkUrl" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.networkUrl"></a>

```java
public java.lang.String getNetworkUrl();
```

- *Type:* java.lang.String

The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#network_url GoogleComputeServiceAttachment#network_url}

---

##### `projectIdOrNum`<sup>Optional</sup> <a name="projectIdOrNum" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum"></a>

```java
public java.lang.String getProjectIdOrNum();
```

- *Type:* java.lang.String

A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#project_id_or_num GoogleComputeServiceAttachment#project_id_or_num}

---

### GoogleComputeServiceAttachmentPscServiceAttachmentId <a name="GoogleComputeServiceAttachmentPscServiceAttachmentId" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentId.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentPscServiceAttachmentId;

GoogleComputeServiceAttachmentPscServiceAttachmentId.builder()
    .build();
```


### GoogleComputeServiceAttachmentTimeouts <a name="GoogleComputeServiceAttachmentTimeouts" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentTimeouts;

GoogleComputeServiceAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#create GoogleComputeServiceAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#delete GoogleComputeServiceAttachment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#update GoogleComputeServiceAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#create GoogleComputeServiceAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#delete GoogleComputeServiceAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#update GoogleComputeServiceAttachment#update}.

---

### GoogleComputeServiceAttachmentTunnelingConfig <a name="GoogleComputeServiceAttachmentTunnelingConfig" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentTunnelingConfig;

GoogleComputeServiceAttachmentTunnelingConfig.builder()
//  .encapsulationProfile(java.lang.String)
//  .routingMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig.property.encapsulationProfile">encapsulationProfile</a></code> | <code>java.lang.String</code> | The encapsulation profile for tunneling traffic. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig.property.routingMode">routingMode</a></code> | <code>java.lang.String</code> | The routing mode for tunneling traffic. |

---

##### `encapsulationProfile`<sup>Optional</sup> <a name="encapsulationProfile" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig.property.encapsulationProfile"></a>

```java
public java.lang.String getEncapsulationProfile();
```

- *Type:* java.lang.String

The encapsulation profile for tunneling traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#encapsulation_profile GoogleComputeServiceAttachment#encapsulation_profile}

---

##### `routingMode`<sup>Optional</sup> <a name="routingMode" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig.property.routingMode"></a>

```java
public java.lang.String getRoutingMode();
```

- *Type:* java.lang.String

The routing mode for tunneling traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_service_attachment#routing_mode GoogleComputeServiceAttachment#routing_mode}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeServiceAttachmentConnectedEndpointsList <a name="GoogleComputeServiceAttachmentConnectedEndpointsList" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentConnectedEndpointsList;

new GoogleComputeServiceAttachmentConnectedEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.get"></a>

```java
public GoogleComputeServiceAttachmentConnectedEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeServiceAttachmentConnectedEndpointsOutputReference <a name="GoogleComputeServiceAttachmentConnectedEndpointsOutputReference" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference;

new GoogleComputeServiceAttachmentConnectedEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork">consumerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.natIps">natIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount">propagatedConnectionCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints">GoogleComputeServiceAttachmentConnectedEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```java
public java.lang.String getConsumerNetwork();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.natIps"></a>

```java
public java.util.List<java.lang.String> getNatIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `propagatedConnectionCount`<sup>Required</sup> <a name="propagatedConnectionCount" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```java
public java.lang.Number getPropagatedConnectionCount();
```

- *Type:* java.lang.Number

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue"></a>

```java
public GoogleComputeServiceAttachmentConnectedEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints">GoogleComputeServiceAttachmentConnectedEndpoints</a>

---


### GoogleComputeServiceAttachmentConsumerAcceptListsList <a name="GoogleComputeServiceAttachmentConsumerAcceptListsList" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentConsumerAcceptListsList;

new GoogleComputeServiceAttachmentConsumerAcceptListsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.get"></a>

```java
public GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeServiceAttachmentConsumerAcceptLists> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>>

---


### GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference <a name="GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference;

new GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetEndpointUrl">resetEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl">resetNetworkUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum">resetProjectIdOrNum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointUrl` <a name="resetEndpointUrl" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetEndpointUrl"></a>

```java
public void resetEndpointUrl()
```

##### `resetNetworkUrl` <a name="resetNetworkUrl" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl"></a>

```java
public void resetNetworkUrl()
```

##### `resetProjectIdOrNum` <a name="resetProjectIdOrNum" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum"></a>

```java
public void resetProjectIdOrNum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput">connectionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.endpointUrlInput">endpointUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput">networkUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput">projectIdOrNumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.endpointUrl">endpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl">networkUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum">projectIdOrNum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="connectionLimitInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput"></a>

```java
public java.lang.Number getConnectionLimitInput();
```

- *Type:* java.lang.Number

---

##### `endpointUrlInput`<sup>Optional</sup> <a name="endpointUrlInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.endpointUrlInput"></a>

```java
public java.lang.String getEndpointUrlInput();
```

- *Type:* java.lang.String

---

##### `networkUrlInput`<sup>Optional</sup> <a name="networkUrlInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput"></a>

```java
public java.lang.String getNetworkUrlInput();
```

- *Type:* java.lang.String

---

##### `projectIdOrNumInput`<sup>Optional</sup> <a name="projectIdOrNumInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput"></a>

```java
public java.lang.String getProjectIdOrNumInput();
```

- *Type:* java.lang.String

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```java
public java.lang.Number getConnectionLimit();
```

- *Type:* java.lang.Number

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.endpointUrl"></a>

```java
public java.lang.String getEndpointUrl();
```

- *Type:* java.lang.String

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl"></a>

```java
public java.lang.String getNetworkUrl();
```

- *Type:* java.lang.String

---

##### `projectIdOrNum`<sup>Required</sup> <a name="projectIdOrNum" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```java
public java.lang.String getProjectIdOrNum();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeServiceAttachmentConsumerAcceptLists getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists">GoogleComputeServiceAttachmentConsumerAcceptLists</a>

---


### GoogleComputeServiceAttachmentPscServiceAttachmentIdList <a name="GoogleComputeServiceAttachmentPscServiceAttachmentIdList" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList;

new GoogleComputeServiceAttachmentPscServiceAttachmentIdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.get"></a>

```java
public GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference <a name="GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference;

new GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.high">high</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.low">low</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentId">GoogleComputeServiceAttachmentPscServiceAttachmentId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.high"></a>

```java
public java.lang.String getHigh();
```

- *Type:* java.lang.String

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.low"></a>

```java
public java.lang.String getLow();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.internalValue"></a>

```java
public GoogleComputeServiceAttachmentPscServiceAttachmentId getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentPscServiceAttachmentId">GoogleComputeServiceAttachmentPscServiceAttachmentId</a>

---


### GoogleComputeServiceAttachmentTimeoutsOutputReference <a name="GoogleComputeServiceAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentTimeoutsOutputReference;

new GoogleComputeServiceAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeServiceAttachmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a>

---


### GoogleComputeServiceAttachmentTunnelingConfigOutputReference <a name="GoogleComputeServiceAttachmentTunnelingConfigOutputReference" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_service_attachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference;

new GoogleComputeServiceAttachmentTunnelingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.resetEncapsulationProfile">resetEncapsulationProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.resetRoutingMode">resetRoutingMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncapsulationProfile` <a name="resetEncapsulationProfile" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.resetEncapsulationProfile"></a>

```java
public void resetEncapsulationProfile()
```

##### `resetRoutingMode` <a name="resetRoutingMode" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.resetRoutingMode"></a>

```java
public void resetRoutingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.encapsulationProfileInput">encapsulationProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.routingModeInput">routingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.encapsulationProfile">encapsulationProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.routingMode">routingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig">GoogleComputeServiceAttachmentTunnelingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encapsulationProfileInput`<sup>Optional</sup> <a name="encapsulationProfileInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.encapsulationProfileInput"></a>

```java
public java.lang.String getEncapsulationProfileInput();
```

- *Type:* java.lang.String

---

##### `routingModeInput`<sup>Optional</sup> <a name="routingModeInput" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.routingModeInput"></a>

```java
public java.lang.String getRoutingModeInput();
```

- *Type:* java.lang.String

---

##### `encapsulationProfile`<sup>Required</sup> <a name="encapsulationProfile" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.encapsulationProfile"></a>

```java
public java.lang.String getEncapsulationProfile();
```

- *Type:* java.lang.String

---

##### `routingMode`<sup>Required</sup> <a name="routingMode" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.routingMode"></a>

```java
public java.lang.String getRoutingMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeServiceAttachmentTunnelingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTunnelingConfig">GoogleComputeServiceAttachmentTunnelingConfig</a>

---



