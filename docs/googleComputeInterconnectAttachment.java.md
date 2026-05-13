# `googleComputeInterconnectAttachment` Submodule <a name="`googleComputeInterconnectAttachment` Submodule" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInterconnectAttachment <a name="GoogleComputeInterconnectAttachment" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment google_compute_interconnect_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachment;

GoogleComputeInterconnectAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .adminEnabled(java.lang.Boolean|IResolvable)
//  .bandwidth(java.lang.String)
//  .candidateCloudRouterIpAddress(java.lang.String)
//  .candidateCloudRouterIpv6Address(java.lang.String)
//  .candidateCustomerRouterIpAddress(java.lang.String)
//  .candidateCustomerRouterIpv6Address(java.lang.String)
//  .candidateSubnets(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .edgeAvailabilityDomain(java.lang.String)
//  .encryption(java.lang.String)
//  .id(java.lang.String)
//  .interconnect(java.lang.String)
//  .ipsecInternalAddresses(java.util.List<java.lang.String>)
//  .l2Forwarding(GoogleComputeInterconnectAttachmentL2Forwarding)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mtu(java.lang.String)
//  .params(GoogleComputeInterconnectAttachmentParams)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .router(java.lang.String)
//  .stackType(java.lang.String)
//  .subnetLength(java.lang.Number)
//  .timeouts(GoogleComputeInterconnectAttachmentTimeouts)
//  .type(java.lang.String)
//  .vlanTag8021Q(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | Provisioned bandwidth capacity for the interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.candidateCloudRouterIpAddress">candidateCloudRouterIpAddress</a></code> | <code>java.lang.String</code> | Single IPv4 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 203.0.113.1/29. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.candidateCloudRouterIpv6Address">candidateCloudRouterIpv6Address</a></code> | <code>java.lang.String</code> | Single IPv6 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 2001:db8::1/125. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.candidateCustomerRouterIpAddress">candidateCustomerRouterIpAddress</a></code> | <code>java.lang.String</code> | Single IPv4 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 203.0.113.2/29. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.candidateCustomerRouterIpv6Address">candidateCustomerRouterIpv6Address</a></code> | <code>java.lang.String</code> | Single IPv6 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 2001:db8::2/125. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.candidateSubnets">candidateSubnets</a></code> | <code>java.util.List<java.lang.String></code> | Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.edgeAvailabilityDomain">edgeAvailabilityDomain</a></code> | <code>java.lang.String</code> | Desired availability domain for the attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.encryption">encryption</a></code> | <code>java.lang.String</code> | Indicates the user-supplied encryption option of this interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#id GoogleComputeInterconnectAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.interconnect">interconnect</a></code> | <code>java.lang.String</code> | URL of the underlying Interconnect object that this attachment's traffic will traverse through. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.ipsecInternalAddresses">ipsecInternalAddresses</a></code> | <code>java.util.List<java.lang.String></code> | URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.l2Forwarding">l2Forwarding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a></code> | l2_forwarding block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.String</code> | Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#project GoogleComputeInterconnectAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where the regional interconnect attachment resides. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.router">router</a></code> | <code>java.lang.String</code> | URL of the cloud router to be used for dynamic routing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.stackType">stackType</a></code> | <code>java.lang.String</code> | The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.subnetLength">subnetLength</a></code> | <code>java.lang.Number</code> | Length of the IPv4 subnet mask. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER", "L2_DEDICATED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.vlanTag8021Q">vlanTag8021Q</a></code> | <code>java.lang.Number</code> | The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#name GoogleComputeInterconnectAttachment#name}

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.adminEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#admin_enabled GoogleComputeInterconnectAttachment#admin_enabled}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.bandwidth"></a>

- *Type:* java.lang.String

Provisioned bandwidth capacity for the interconnect attachment.

For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G Possible values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G", "BPS_20G", "BPS_50G", "BPS_100G", "BPS_400G"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#bandwidth GoogleComputeInterconnectAttachment#bandwidth}

---

##### `candidateCloudRouterIpAddress`<sup>Optional</sup> <a name="candidateCloudRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.candidateCloudRouterIpAddress"></a>

- *Type:* java.lang.String

Single IPv4 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 203.0.113.1/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#candidate_cloud_router_ip_address GoogleComputeInterconnectAttachment#candidate_cloud_router_ip_address}

---

##### `candidateCloudRouterIpv6Address`<sup>Optional</sup> <a name="candidateCloudRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.candidateCloudRouterIpv6Address"></a>

- *Type:* java.lang.String

Single IPv6 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 2001:db8::1/125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#candidate_cloud_router_ipv6_address GoogleComputeInterconnectAttachment#candidate_cloud_router_ipv6_address}

---

##### `candidateCustomerRouterIpAddress`<sup>Optional</sup> <a name="candidateCustomerRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.candidateCustomerRouterIpAddress"></a>

- *Type:* java.lang.String

Single IPv4 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 203.0.113.2/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#candidate_customer_router_ip_address GoogleComputeInterconnectAttachment#candidate_customer_router_ip_address}

---

##### `candidateCustomerRouterIpv6Address`<sup>Optional</sup> <a name="candidateCustomerRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.candidateCustomerRouterIpv6Address"></a>

- *Type:* java.lang.String

Single IPv6 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 2001:db8::2/125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#candidate_customer_router_ipv6_address GoogleComputeInterconnectAttachment#candidate_customer_router_ipv6_address}

---

##### `candidateSubnets`<sup>Optional</sup> <a name="candidateSubnets" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.candidateSubnets"></a>

- *Type:* java.util.List<java.lang.String>

Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment.

All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#candidate_subnets GoogleComputeInterconnectAttachment#candidate_subnets}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#description GoogleComputeInterconnectAttachment#description}

---

##### `edgeAvailabilityDomain`<sup>Optional</sup> <a name="edgeAvailabilityDomain" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.edgeAvailabilityDomain"></a>

- *Type:* java.lang.String

Desired availability domain for the attachment.

Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#edge_availability_domain GoogleComputeInterconnectAttachment#edge_availability_domain}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.encryption"></a>

- *Type:* java.lang.String

Indicates the user-supplied encryption option of this interconnect attachment.

Can only be specified at attachment creation for PARTNER or
DEDICATED attachments.

* NONE - This is the default value, which means that the VLAN attachment
  carries unencrypted traffic. VMs are able to send traffic to, or receive
  traffic from, such a VLAN attachment.
* IPSEC - The VLAN attachment carries only encrypted traffic that is
  encrypted by an IPsec device, such as an HA VPN gateway or third-party
  IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
  such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
  attachment must be created with this option. Default value: "NONE" Possible values: ["NONE", "IPSEC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#encryption GoogleComputeInterconnectAttachment#encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#id GoogleComputeInterconnectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.interconnect"></a>

- *Type:* java.lang.String

URL of the underlying Interconnect object that this attachment's traffic will traverse through.

Required if type is DEDICATED, must not
be set if type is PARTNER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#interconnect GoogleComputeInterconnectAttachment#interconnect}

---

##### `ipsecInternalAddresses`<sup>Optional</sup> <a name="ipsecInternalAddresses" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.ipsecInternalAddresses"></a>

- *Type:* java.util.List<java.lang.String>

URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC.

The addresses must be RFC 1918 IP address ranges. When creating HA VPN
gateway over the interconnect attachment, if the attachment is configured
to use an RFC 1918 IP address, then the VPN gateway's IP address will be
allocated from the IP address range specified here.
For example, if the HA VPN gateway's interface 0 is paired to this
interconnect attachment, then an RFC 1918 IP address for the VPN gateway
interface 0 will be allocated from the IP address specified for this
interconnect attachment.
If this field is not specified for interconnect attachment that has
encryption option as IPSEC, later on when creating HA VPN gateway on this
interconnect attachment, the HA VPN gateway's IP address will be
allocated from regional external IP address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#ipsec_internal_addresses GoogleComputeInterconnectAttachment#ipsec_internal_addresses}

---

##### `l2Forwarding`<sup>Optional</sup> <a name="l2Forwarding" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.l2Forwarding"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a>

l2_forwarding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#l2_forwarding GoogleComputeInterconnectAttachment#l2_forwarding}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#labels GoogleComputeInterconnectAttachment#labels}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.mtu"></a>

- *Type:* java.lang.String

Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment.

Valid values are 1440, 1460, 1500, and 8896. If not specified, the value will default to 1440.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#mtu GoogleComputeInterconnectAttachment#mtu}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#params GoogleComputeInterconnectAttachment#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#project GoogleComputeInterconnectAttachment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where the regional interconnect attachment resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#region GoogleComputeInterconnectAttachment#region}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.router"></a>

- *Type:* java.lang.String

URL of the cloud router to be used for dynamic routing.

This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#router GoogleComputeInterconnectAttachment#router}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.stackType"></a>

- *Type:* java.lang.String

The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.
This field can be both set at interconnect attachments creation and update
interconnect attachment operations. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#stack_type GoogleComputeInterconnectAttachment#stack_type}

---

##### `subnetLength`<sup>Optional</sup> <a name="subnetLength" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.subnetLength"></a>

- *Type:* java.lang.Number

Length of the IPv4 subnet mask.

Allowed values: 29 (default), 30. The default value is 29,
except for Cross-Cloud Interconnect connections that use an InterconnectRemoteLocation with a
constraints.subnetLengthRange.min equal to 30. For example, connections that use an Azure
remote location fall into this category. In these cases, the default value is 30, and
requesting 29 returns an error. Where both 29 and 30 are allowed, 29 is preferred, because it
gives Google Cloud Support more debugging visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#subnet_length GoogleComputeInterconnectAttachment#subnet_length}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#timeouts GoogleComputeInterconnectAttachment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER", "L2_DEDICATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#type GoogleComputeInterconnectAttachment#type}

---

##### `vlanTag8021Q`<sup>Optional</sup> <a name="vlanTag8021Q" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.vlanTag8021Q"></a>

- *Type:* java.lang.Number

The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#vlan_tag8021q GoogleComputeInterconnectAttachment#vlan_tag8021q}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putL2Forwarding">putL2Forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCloudRouterIpAddress">resetCandidateCloudRouterIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCloudRouterIpv6Address">resetCandidateCloudRouterIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCustomerRouterIpAddress">resetCandidateCustomerRouterIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCustomerRouterIpv6Address">resetCandidateCustomerRouterIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateSubnets">resetCandidateSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetEdgeAvailabilityDomain">resetEdgeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetInterconnect">resetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetIpsecInternalAddresses">resetIpsecInternalAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetL2Forwarding">resetL2Forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetRouter">resetRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetSubnetLength">resetSubnetLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetVlanTag8021Q">resetVlanTag8021Q</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putL2Forwarding` <a name="putL2Forwarding" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putL2Forwarding"></a>

```java
public void putL2Forwarding(GoogleComputeInterconnectAttachmentL2Forwarding value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putL2Forwarding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a>

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putParams"></a>

```java
public void putParams(GoogleComputeInterconnectAttachmentParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeInterconnectAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>

---

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetAdminEnabled"></a>

```java
public void resetAdminEnabled()
```

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetBandwidth"></a>

```java
public void resetBandwidth()
```

##### `resetCandidateCloudRouterIpAddress` <a name="resetCandidateCloudRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCloudRouterIpAddress"></a>

```java
public void resetCandidateCloudRouterIpAddress()
```

##### `resetCandidateCloudRouterIpv6Address` <a name="resetCandidateCloudRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCloudRouterIpv6Address"></a>

```java
public void resetCandidateCloudRouterIpv6Address()
```

##### `resetCandidateCustomerRouterIpAddress` <a name="resetCandidateCustomerRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCustomerRouterIpAddress"></a>

```java
public void resetCandidateCustomerRouterIpAddress()
```

##### `resetCandidateCustomerRouterIpv6Address` <a name="resetCandidateCustomerRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCustomerRouterIpv6Address"></a>

```java
public void resetCandidateCustomerRouterIpv6Address()
```

##### `resetCandidateSubnets` <a name="resetCandidateSubnets" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateSubnets"></a>

```java
public void resetCandidateSubnets()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEdgeAvailabilityDomain` <a name="resetEdgeAvailabilityDomain" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetEdgeAvailabilityDomain"></a>

```java
public void resetEdgeAvailabilityDomain()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetInterconnect` <a name="resetInterconnect" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetInterconnect"></a>

```java
public void resetInterconnect()
```

##### `resetIpsecInternalAddresses` <a name="resetIpsecInternalAddresses" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetIpsecInternalAddresses"></a>

```java
public void resetIpsecInternalAddresses()
```

##### `resetL2Forwarding` <a name="resetL2Forwarding" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetL2Forwarding"></a>

```java
public void resetL2Forwarding()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetParams"></a>

```java
public void resetParams()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRouter` <a name="resetRouter" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetRouter"></a>

```java
public void resetRouter()
```

##### `resetStackType` <a name="resetStackType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetStackType"></a>

```java
public void resetStackType()
```

##### `resetSubnetLength` <a name="resetSubnetLength" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetSubnetLength"></a>

```java
public void resetSubnetLength()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetType"></a>

```java
public void resetType()
```

##### `resetVlanTag8021Q` <a name="resetVlanTag8021Q" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetVlanTag8021Q"></a>

```java
public void resetVlanTag8021Q()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeInterconnectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachment;

GoogleComputeInterconnectAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachment;

GoogleComputeInterconnectAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachment;

GoogleComputeInterconnectAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachment;

GoogleComputeInterconnectAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeInterconnectAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeInterconnectAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeInterconnectAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeInterconnectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeInterconnectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.attachmentGroup">attachmentGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cloudRouterIpAddress">cloudRouterIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cloudRouterIpv6Address">cloudRouterIpv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.customerRouterIpAddress">customerRouterIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.customerRouterIpv6Address">customerRouterIpv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.googleReferenceId">googleReferenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.l2Forwarding">l2Forwarding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference">GoogleComputeInterconnectAttachmentL2ForwardingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.pairingKey">pairingKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference">GoogleComputeInterconnectAttachmentParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.partnerAsn">partnerAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.privateInterconnectInfo">privateInterconnectInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList">GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference">GoogleComputeInterconnectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.adminEnabledInput">adminEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.bandwidthInput">bandwidthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpAddressInput">candidateCloudRouterIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpv6AddressInput">candidateCloudRouterIpv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpAddressInput">candidateCustomerRouterIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpv6AddressInput">candidateCustomerRouterIpv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateSubnetsInput">candidateSubnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.edgeAvailabilityDomainInput">edgeAvailabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.encryptionInput">encryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.interconnectInput">interconnectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.ipsecInternalAddressesInput">ipsecInternalAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.l2ForwardingInput">l2ForwardingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.mtuInput">mtuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.routerInput">routerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.stackTypeInput">stackTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.subnetLengthInput">subnetLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.vlanTag8021QInput">vlanTag8021QInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpAddress">candidateCloudRouterIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpv6Address">candidateCloudRouterIpv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpAddress">candidateCustomerRouterIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpv6Address">candidateCustomerRouterIpv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateSubnets">candidateSubnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.edgeAvailabilityDomain">edgeAvailabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.encryption">encryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.interconnect">interconnect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.ipsecInternalAddresses">ipsecInternalAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.mtu">mtu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.router">router</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.stackType">stackType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.subnetLength">subnetLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.vlanTag8021Q">vlanTag8021Q</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attachmentGroup`<sup>Required</sup> <a name="attachmentGroup" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.attachmentGroup"></a>

```java
public java.lang.String getAttachmentGroup();
```

- *Type:* java.lang.String

---

##### `cloudRouterIpAddress`<sup>Required</sup> <a name="cloudRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cloudRouterIpAddress"></a>

```java
public java.lang.String getCloudRouterIpAddress();
```

- *Type:* java.lang.String

---

##### `cloudRouterIpv6Address`<sup>Required</sup> <a name="cloudRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cloudRouterIpv6Address"></a>

```java
public java.lang.String getCloudRouterIpv6Address();
```

- *Type:* java.lang.String

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `customerRouterIpAddress`<sup>Required</sup> <a name="customerRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.customerRouterIpAddress"></a>

```java
public java.lang.String getCustomerRouterIpAddress();
```

- *Type:* java.lang.String

---

##### `customerRouterIpv6Address`<sup>Required</sup> <a name="customerRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.customerRouterIpv6Address"></a>

```java
public java.lang.String getCustomerRouterIpv6Address();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `googleReferenceId`<sup>Required</sup> <a name="googleReferenceId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.googleReferenceId"></a>

```java
public java.lang.String getGoogleReferenceId();
```

- *Type:* java.lang.String

---

##### `l2Forwarding`<sup>Required</sup> <a name="l2Forwarding" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.l2Forwarding"></a>

```java
public GoogleComputeInterconnectAttachmentL2ForwardingOutputReference getL2Forwarding();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference">GoogleComputeInterconnectAttachmentL2ForwardingOutputReference</a>

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `pairingKey`<sup>Required</sup> <a name="pairingKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.pairingKey"></a>

```java
public java.lang.String getPairingKey();
```

- *Type:* java.lang.String

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.params"></a>

```java
public GoogleComputeInterconnectAttachmentParamsOutputReference getParams();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference">GoogleComputeInterconnectAttachmentParamsOutputReference</a>

---

##### `partnerAsn`<sup>Required</sup> <a name="partnerAsn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.partnerAsn"></a>

```java
public java.lang.String getPartnerAsn();
```

- *Type:* java.lang.String

---

##### `privateInterconnectInfo`<sup>Required</sup> <a name="privateInterconnectInfo" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.privateInterconnectInfo"></a>

```java
public GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList getPrivateInterconnectInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList">GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.timeouts"></a>

```java
public GoogleComputeInterconnectAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference">GoogleComputeInterconnectAttachmentTimeoutsOutputReference</a>

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.adminEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAdminEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.bandwidthInput"></a>

```java
public java.lang.String getBandwidthInput();
```

- *Type:* java.lang.String

---

##### `candidateCloudRouterIpAddressInput`<sup>Optional</sup> <a name="candidateCloudRouterIpAddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpAddressInput"></a>

```java
public java.lang.String getCandidateCloudRouterIpAddressInput();
```

- *Type:* java.lang.String

---

##### `candidateCloudRouterIpv6AddressInput`<sup>Optional</sup> <a name="candidateCloudRouterIpv6AddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpv6AddressInput"></a>

```java
public java.lang.String getCandidateCloudRouterIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `candidateCustomerRouterIpAddressInput`<sup>Optional</sup> <a name="candidateCustomerRouterIpAddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpAddressInput"></a>

```java
public java.lang.String getCandidateCustomerRouterIpAddressInput();
```

- *Type:* java.lang.String

---

##### `candidateCustomerRouterIpv6AddressInput`<sup>Optional</sup> <a name="candidateCustomerRouterIpv6AddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpv6AddressInput"></a>

```java
public java.lang.String getCandidateCustomerRouterIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `candidateSubnetsInput`<sup>Optional</sup> <a name="candidateSubnetsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateSubnetsInput"></a>

```java
public java.util.List<java.lang.String> getCandidateSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `edgeAvailabilityDomainInput`<sup>Optional</sup> <a name="edgeAvailabilityDomainInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.edgeAvailabilityDomainInput"></a>

```java
public java.lang.String getEdgeAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.encryptionInput"></a>

```java
public java.lang.String getEncryptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interconnectInput`<sup>Optional</sup> <a name="interconnectInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.interconnectInput"></a>

```java
public java.lang.String getInterconnectInput();
```

- *Type:* java.lang.String

---

##### `ipsecInternalAddressesInput`<sup>Optional</sup> <a name="ipsecInternalAddressesInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.ipsecInternalAddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpsecInternalAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `l2ForwardingInput`<sup>Optional</sup> <a name="l2ForwardingInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.l2ForwardingInput"></a>

```java
public GoogleComputeInterconnectAttachmentL2Forwarding getL2ForwardingInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.mtuInput"></a>

```java
public java.lang.String getMtuInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.paramsInput"></a>

```java
public GoogleComputeInterconnectAttachmentParams getParamsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.routerInput"></a>

```java
public java.lang.String getRouterInput();
```

- *Type:* java.lang.String

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.stackTypeInput"></a>

```java
public java.lang.String getStackTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetLengthInput`<sup>Optional</sup> <a name="subnetLengthInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.subnetLengthInput"></a>

```java
public java.lang.Number getSubnetLengthInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleComputeInterconnectAttachmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vlanTag8021QInput`<sup>Optional</sup> <a name="vlanTag8021QInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.vlanTag8021QInput"></a>

```java
public java.lang.Number getVlanTag8021QInput();
```

- *Type:* java.lang.Number

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.adminEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAdminEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.bandwidth"></a>

```java
public java.lang.String getBandwidth();
```

- *Type:* java.lang.String

---

##### `candidateCloudRouterIpAddress`<sup>Required</sup> <a name="candidateCloudRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpAddress"></a>

```java
public java.lang.String getCandidateCloudRouterIpAddress();
```

- *Type:* java.lang.String

---

##### `candidateCloudRouterIpv6Address`<sup>Required</sup> <a name="candidateCloudRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpv6Address"></a>

```java
public java.lang.String getCandidateCloudRouterIpv6Address();
```

- *Type:* java.lang.String

---

##### `candidateCustomerRouterIpAddress`<sup>Required</sup> <a name="candidateCustomerRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpAddress"></a>

```java
public java.lang.String getCandidateCustomerRouterIpAddress();
```

- *Type:* java.lang.String

---

##### `candidateCustomerRouterIpv6Address`<sup>Required</sup> <a name="candidateCustomerRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpv6Address"></a>

```java
public java.lang.String getCandidateCustomerRouterIpv6Address();
```

- *Type:* java.lang.String

---

##### `candidateSubnets`<sup>Required</sup> <a name="candidateSubnets" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateSubnets"></a>

```java
public java.util.List<java.lang.String> getCandidateSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `edgeAvailabilityDomain`<sup>Required</sup> <a name="edgeAvailabilityDomain" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.edgeAvailabilityDomain"></a>

```java
public java.lang.String getEdgeAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.encryption"></a>

```java
public java.lang.String getEncryption();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.interconnect"></a>

```java
public java.lang.String getInterconnect();
```

- *Type:* java.lang.String

---

##### `ipsecInternalAddresses`<sup>Required</sup> <a name="ipsecInternalAddresses" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.ipsecInternalAddresses"></a>

```java
public java.util.List<java.lang.String> getIpsecInternalAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.mtu"></a>

```java
public java.lang.String getMtu();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

---

##### `subnetLength`<sup>Required</sup> <a name="subnetLength" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.subnetLength"></a>

```java
public java.lang.Number getSubnetLength();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vlanTag8021Q`<sup>Required</sup> <a name="vlanTag8021Q" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.vlanTag8021Q"></a>

```java
public java.lang.Number getVlanTag8021Q();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInterconnectAttachmentConfig <a name="GoogleComputeInterconnectAttachmentConfig" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentConfig;

GoogleComputeInterconnectAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .adminEnabled(java.lang.Boolean|IResolvable)
//  .bandwidth(java.lang.String)
//  .candidateCloudRouterIpAddress(java.lang.String)
//  .candidateCloudRouterIpv6Address(java.lang.String)
//  .candidateCustomerRouterIpAddress(java.lang.String)
//  .candidateCustomerRouterIpv6Address(java.lang.String)
//  .candidateSubnets(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .edgeAvailabilityDomain(java.lang.String)
//  .encryption(java.lang.String)
//  .id(java.lang.String)
//  .interconnect(java.lang.String)
//  .ipsecInternalAddresses(java.util.List<java.lang.String>)
//  .l2Forwarding(GoogleComputeInterconnectAttachmentL2Forwarding)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mtu(java.lang.String)
//  .params(GoogleComputeInterconnectAttachmentParams)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .router(java.lang.String)
//  .stackType(java.lang.String)
//  .subnetLength(java.lang.Number)
//  .timeouts(GoogleComputeInterconnectAttachmentTimeouts)
//  .type(java.lang.String)
//  .vlanTag8021Q(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | Provisioned bandwidth capacity for the interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpAddress">candidateCloudRouterIpAddress</a></code> | <code>java.lang.String</code> | Single IPv4 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 203.0.113.1/29. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpv6Address">candidateCloudRouterIpv6Address</a></code> | <code>java.lang.String</code> | Single IPv6 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 2001:db8::1/125. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpAddress">candidateCustomerRouterIpAddress</a></code> | <code>java.lang.String</code> | Single IPv4 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 203.0.113.2/29. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpv6Address">candidateCustomerRouterIpv6Address</a></code> | <code>java.lang.String</code> | Single IPv6 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 2001:db8::2/125. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateSubnets">candidateSubnets</a></code> | <code>java.util.List<java.lang.String></code> | Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.edgeAvailabilityDomain">edgeAvailabilityDomain</a></code> | <code>java.lang.String</code> | Desired availability domain for the attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.encryption">encryption</a></code> | <code>java.lang.String</code> | Indicates the user-supplied encryption option of this interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#id GoogleComputeInterconnectAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.interconnect">interconnect</a></code> | <code>java.lang.String</code> | URL of the underlying Interconnect object that this attachment's traffic will traverse through. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.ipsecInternalAddresses">ipsecInternalAddresses</a></code> | <code>java.util.List<java.lang.String></code> | URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.l2Forwarding">l2Forwarding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a></code> | l2_forwarding block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.mtu">mtu</a></code> | <code>java.lang.String</code> | Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#project GoogleComputeInterconnectAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where the regional interconnect attachment resides. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.router">router</a></code> | <code>java.lang.String</code> | URL of the cloud router to be used for dynamic routing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.stackType">stackType</a></code> | <code>java.lang.String</code> | The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.subnetLength">subnetLength</a></code> | <code>java.lang.Number</code> | Length of the IPv4 subnet mask. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER", "L2_DEDICATED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.vlanTag8021Q">vlanTag8021Q</a></code> | <code>java.lang.Number</code> | The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#name GoogleComputeInterconnectAttachment#name}

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.adminEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAdminEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#admin_enabled GoogleComputeInterconnectAttachment#admin_enabled}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.bandwidth"></a>

```java
public java.lang.String getBandwidth();
```

- *Type:* java.lang.String

Provisioned bandwidth capacity for the interconnect attachment.

For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G Possible values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G", "BPS_20G", "BPS_50G", "BPS_100G", "BPS_400G"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#bandwidth GoogleComputeInterconnectAttachment#bandwidth}

---

##### `candidateCloudRouterIpAddress`<sup>Optional</sup> <a name="candidateCloudRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpAddress"></a>

```java
public java.lang.String getCandidateCloudRouterIpAddress();
```

- *Type:* java.lang.String

Single IPv4 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 203.0.113.1/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#candidate_cloud_router_ip_address GoogleComputeInterconnectAttachment#candidate_cloud_router_ip_address}

---

##### `candidateCloudRouterIpv6Address`<sup>Optional</sup> <a name="candidateCloudRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpv6Address"></a>

```java
public java.lang.String getCandidateCloudRouterIpv6Address();
```

- *Type:* java.lang.String

Single IPv6 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 2001:db8::1/125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#candidate_cloud_router_ipv6_address GoogleComputeInterconnectAttachment#candidate_cloud_router_ipv6_address}

---

##### `candidateCustomerRouterIpAddress`<sup>Optional</sup> <a name="candidateCustomerRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpAddress"></a>

```java
public java.lang.String getCandidateCustomerRouterIpAddress();
```

- *Type:* java.lang.String

Single IPv4 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 203.0.113.2/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#candidate_customer_router_ip_address GoogleComputeInterconnectAttachment#candidate_customer_router_ip_address}

---

##### `candidateCustomerRouterIpv6Address`<sup>Optional</sup> <a name="candidateCustomerRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpv6Address"></a>

```java
public java.lang.String getCandidateCustomerRouterIpv6Address();
```

- *Type:* java.lang.String

Single IPv6 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 2001:db8::2/125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#candidate_customer_router_ipv6_address GoogleComputeInterconnectAttachment#candidate_customer_router_ipv6_address}

---

##### `candidateSubnets`<sup>Optional</sup> <a name="candidateSubnets" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateSubnets"></a>

```java
public java.util.List<java.lang.String> getCandidateSubnets();
```

- *Type:* java.util.List<java.lang.String>

Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment.

All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#candidate_subnets GoogleComputeInterconnectAttachment#candidate_subnets}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#description GoogleComputeInterconnectAttachment#description}

---

##### `edgeAvailabilityDomain`<sup>Optional</sup> <a name="edgeAvailabilityDomain" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.edgeAvailabilityDomain"></a>

```java
public java.lang.String getEdgeAvailabilityDomain();
```

- *Type:* java.lang.String

Desired availability domain for the attachment.

Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#edge_availability_domain GoogleComputeInterconnectAttachment#edge_availability_domain}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.encryption"></a>

```java
public java.lang.String getEncryption();
```

- *Type:* java.lang.String

Indicates the user-supplied encryption option of this interconnect attachment.

Can only be specified at attachment creation for PARTNER or
DEDICATED attachments.

* NONE - This is the default value, which means that the VLAN attachment
  carries unencrypted traffic. VMs are able to send traffic to, or receive
  traffic from, such a VLAN attachment.
* IPSEC - The VLAN attachment carries only encrypted traffic that is
  encrypted by an IPsec device, such as an HA VPN gateway or third-party
  IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
  such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
  attachment must be created with this option. Default value: "NONE" Possible values: ["NONE", "IPSEC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#encryption GoogleComputeInterconnectAttachment#encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#id GoogleComputeInterconnectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.interconnect"></a>

```java
public java.lang.String getInterconnect();
```

- *Type:* java.lang.String

URL of the underlying Interconnect object that this attachment's traffic will traverse through.

Required if type is DEDICATED, must not
be set if type is PARTNER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#interconnect GoogleComputeInterconnectAttachment#interconnect}

---

##### `ipsecInternalAddresses`<sup>Optional</sup> <a name="ipsecInternalAddresses" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.ipsecInternalAddresses"></a>

```java
public java.util.List<java.lang.String> getIpsecInternalAddresses();
```

- *Type:* java.util.List<java.lang.String>

URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC.

The addresses must be RFC 1918 IP address ranges. When creating HA VPN
gateway over the interconnect attachment, if the attachment is configured
to use an RFC 1918 IP address, then the VPN gateway's IP address will be
allocated from the IP address range specified here.
For example, if the HA VPN gateway's interface 0 is paired to this
interconnect attachment, then an RFC 1918 IP address for the VPN gateway
interface 0 will be allocated from the IP address specified for this
interconnect attachment.
If this field is not specified for interconnect attachment that has
encryption option as IPSEC, later on when creating HA VPN gateway on this
interconnect attachment, the HA VPN gateway's IP address will be
allocated from regional external IP address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#ipsec_internal_addresses GoogleComputeInterconnectAttachment#ipsec_internal_addresses}

---

##### `l2Forwarding`<sup>Optional</sup> <a name="l2Forwarding" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.l2Forwarding"></a>

```java
public GoogleComputeInterconnectAttachmentL2Forwarding getL2Forwarding();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a>

l2_forwarding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#l2_forwarding GoogleComputeInterconnectAttachment#l2_forwarding}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#labels GoogleComputeInterconnectAttachment#labels}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.mtu"></a>

```java
public java.lang.String getMtu();
```

- *Type:* java.lang.String

Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment.

Valid values are 1440, 1460, 1500, and 8896. If not specified, the value will default to 1440.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#mtu GoogleComputeInterconnectAttachment#mtu}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.params"></a>

```java
public GoogleComputeInterconnectAttachmentParams getParams();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#params GoogleComputeInterconnectAttachment#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#project GoogleComputeInterconnectAttachment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where the regional interconnect attachment resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#region GoogleComputeInterconnectAttachment#region}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

URL of the cloud router to be used for dynamic routing.

This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#router GoogleComputeInterconnectAttachment#router}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.
This field can be both set at interconnect attachments creation and update
interconnect attachment operations. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#stack_type GoogleComputeInterconnectAttachment#stack_type}

---

##### `subnetLength`<sup>Optional</sup> <a name="subnetLength" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.subnetLength"></a>

```java
public java.lang.Number getSubnetLength();
```

- *Type:* java.lang.Number

Length of the IPv4 subnet mask.

Allowed values: 29 (default), 30. The default value is 29,
except for Cross-Cloud Interconnect connections that use an InterconnectRemoteLocation with a
constraints.subnetLengthRange.min equal to 30. For example, connections that use an Azure
remote location fall into this category. In these cases, the default value is 30, and
requesting 29 returns an error. Where both 29 and 30 are allowed, 29 is preferred, because it
gives Google Cloud Support more debugging visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#subnet_length GoogleComputeInterconnectAttachment#subnet_length}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.timeouts"></a>

```java
public GoogleComputeInterconnectAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#timeouts GoogleComputeInterconnectAttachment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER", "L2_DEDICATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#type GoogleComputeInterconnectAttachment#type}

---

##### `vlanTag8021Q`<sup>Optional</sup> <a name="vlanTag8021Q" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.vlanTag8021Q"></a>

```java
public java.lang.Number getVlanTag8021Q();
```

- *Type:* java.lang.Number

The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#vlan_tag8021q GoogleComputeInterconnectAttachment#vlan_tag8021q}

---

### GoogleComputeInterconnectAttachmentL2Forwarding <a name="GoogleComputeInterconnectAttachmentL2Forwarding" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentL2Forwarding;

GoogleComputeInterconnectAttachmentL2Forwarding.builder()
//  .applianceMappings(IResolvable|java.util.List<GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings>)
//  .defaultApplianceIpAddress(java.lang.String)
//  .geneveHeader(GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader)
//  .network(java.lang.String)
//  .tunnelEndpointIpAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.applianceMappings">applianceMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>></code> | appliance_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.defaultApplianceIpAddress">defaultApplianceIpAddress</a></code> | <code>java.lang.String</code> | The default appliance IP address. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.geneveHeader">geneveHeader</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a></code> | geneve_header block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.network">network</a></code> | <code>java.lang.String</code> | URL of the network to which this attachment belongs. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.tunnelEndpointIpAddress">tunnelEndpointIpAddress</a></code> | <code>java.lang.String</code> | The tunnel endpoint IP address. |

---

##### `applianceMappings`<sup>Optional</sup> <a name="applianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.applianceMappings"></a>

```java
public IResolvable|java.util.List<GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings> getApplianceMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>>

appliance_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#appliance_mappings GoogleComputeInterconnectAttachment#appliance_mappings}

---

##### `defaultApplianceIpAddress`<sup>Optional</sup> <a name="defaultApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.defaultApplianceIpAddress"></a>

```java
public java.lang.String getDefaultApplianceIpAddress();
```

- *Type:* java.lang.String

The default appliance IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#default_appliance_ip_address GoogleComputeInterconnectAttachment#default_appliance_ip_address}

---

##### `geneveHeader`<sup>Optional</sup> <a name="geneveHeader" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.geneveHeader"></a>

```java
public GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader getGeneveHeader();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

geneve_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#geneve_header GoogleComputeInterconnectAttachment#geneve_header}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

URL of the network to which this attachment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#network GoogleComputeInterconnectAttachment#network}

---

##### `tunnelEndpointIpAddress`<sup>Optional</sup> <a name="tunnelEndpointIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.tunnelEndpointIpAddress"></a>

```java
public java.lang.String getTunnelEndpointIpAddress();
```

- *Type:* java.lang.String

The tunnel endpoint IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#tunnel_endpoint_ip_address GoogleComputeInterconnectAttachment#tunnel_endpoint_ip_address}

---

### GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings <a name="GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings;

GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.builder()
//  .applianceIpAddress(java.lang.String)
//  .innerVlanToApplianceMappings(IResolvable|java.util.List<GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings>)
//  .name(java.lang.String)
//  .vlanId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.applianceIpAddress">applianceIpAddress</a></code> | <code>java.lang.String</code> | The appliance IP address. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.innerVlanToApplianceMappings">innerVlanToApplianceMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>></code> | inner_vlan_to_appliance_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.name">name</a></code> | <code>java.lang.String</code> | The name of this appliance mapping rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | The VLAN tag. |

---

##### `applianceIpAddress`<sup>Optional</sup> <a name="applianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.applianceIpAddress"></a>

```java
public java.lang.String getApplianceIpAddress();
```

- *Type:* java.lang.String

The appliance IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#appliance_ip_address GoogleComputeInterconnectAttachment#appliance_ip_address}

---

##### `innerVlanToApplianceMappings`<sup>Optional</sup> <a name="innerVlanToApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.innerVlanToApplianceMappings"></a>

```java
public IResolvable|java.util.List<GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings> getInnerVlanToApplianceMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>>

inner_vlan_to_appliance_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#inner_vlan_to_appliance_mappings GoogleComputeInterconnectAttachment#inner_vlan_to_appliance_mappings}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this appliance mapping rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#name GoogleComputeInterconnectAttachment#name}

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

The VLAN tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#vlan_id GoogleComputeInterconnectAttachment#vlan_id}

---

### GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings <a name="GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings;

GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.builder()
//  .innerApplianceIpAddress(java.lang.String)
//  .innerVlanTags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerApplianceIpAddress">innerApplianceIpAddress</a></code> | <code>java.lang.String</code> | The inner appliance IP address. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerVlanTags">innerVlanTags</a></code> | <code>java.util.List<java.lang.String></code> | List of inner VLAN tags. |

---

##### `innerApplianceIpAddress`<sup>Optional</sup> <a name="innerApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerApplianceIpAddress"></a>

```java
public java.lang.String getInnerApplianceIpAddress();
```

- *Type:* java.lang.String

The inner appliance IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#inner_appliance_ip_address GoogleComputeInterconnectAttachment#inner_appliance_ip_address}

---

##### `innerVlanTags`<sup>Optional</sup> <a name="innerVlanTags" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerVlanTags"></a>

```java
public java.util.List<java.lang.String> getInnerVlanTags();
```

- *Type:* java.util.List<java.lang.String>

List of inner VLAN tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#inner_vlan_tags GoogleComputeInterconnectAttachment#inner_vlan_tags}

---

### GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader <a name="GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader;

GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader.builder()
//  .vni(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader.property.vni">vni</a></code> | <code>java.lang.Number</code> | VNI is a 24-bit unique virtual network identifier. |

---

##### `vni`<sup>Optional</sup> <a name="vni" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader.property.vni"></a>

```java
public java.lang.Number getVni();
```

- *Type:* java.lang.Number

VNI is a 24-bit unique virtual network identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#vni GoogleComputeInterconnectAttachment#vni}

---

### GoogleComputeInterconnectAttachmentParams <a name="GoogleComputeInterconnectAttachmentParams" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentParams;

GoogleComputeInterconnectAttachmentParams.builder()
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags to be bound to the interconnect attachment. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags to be bound to the interconnect attachment.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#resource_manager_tags GoogleComputeInterconnectAttachment#resource_manager_tags}

---

### GoogleComputeInterconnectAttachmentPrivateInterconnectInfo <a name="GoogleComputeInterconnectAttachmentPrivateInterconnectInfo" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo;

GoogleComputeInterconnectAttachmentPrivateInterconnectInfo.builder()
    .build();
```


### GoogleComputeInterconnectAttachmentTimeouts <a name="GoogleComputeInterconnectAttachmentTimeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentTimeouts;

GoogleComputeInterconnectAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#create GoogleComputeInterconnectAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#delete GoogleComputeInterconnectAttachment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#update GoogleComputeInterconnectAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#create GoogleComputeInterconnectAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#delete GoogleComputeInterconnectAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_interconnect_attachment#update GoogleComputeInterconnectAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList <a name="GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList;

new GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.get"></a>

```java
public GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>>

---


### GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference <a name="GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference;

new GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerApplianceIpAddress">resetInnerApplianceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerVlanTags">resetInnerVlanTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInnerApplianceIpAddress` <a name="resetInnerApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerApplianceIpAddress"></a>

```java
public void resetInnerApplianceIpAddress()
```

##### `resetInnerVlanTags` <a name="resetInnerVlanTags" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerVlanTags"></a>

```java
public void resetInnerVlanTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddressInput">innerApplianceIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTagsInput">innerVlanTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddress">innerApplianceIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTags">innerVlanTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `innerApplianceIpAddressInput`<sup>Optional</sup> <a name="innerApplianceIpAddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddressInput"></a>

```java
public java.lang.String getInnerApplianceIpAddressInput();
```

- *Type:* java.lang.String

---

##### `innerVlanTagsInput`<sup>Optional</sup> <a name="innerVlanTagsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTagsInput"></a>

```java
public java.util.List<java.lang.String> getInnerVlanTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `innerApplianceIpAddress`<sup>Required</sup> <a name="innerApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddress"></a>

```java
public java.lang.String getInnerApplianceIpAddress();
```

- *Type:* java.lang.String

---

##### `innerVlanTags`<sup>Required</sup> <a name="innerVlanTags" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTags"></a>

```java
public java.util.List<java.lang.String> getInnerVlanTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>

---


### GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList <a name="GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList;

new GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.get"></a>

```java
public GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>>

---


### GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference <a name="GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference;

new GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.putInnerVlanToApplianceMappings">putInnerVlanToApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetApplianceIpAddress">resetApplianceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetInnerVlanToApplianceMappings">resetInnerVlanToApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInnerVlanToApplianceMappings` <a name="putInnerVlanToApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.putInnerVlanToApplianceMappings"></a>

```java
public void putInnerVlanToApplianceMappings(IResolvable|java.util.List<GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.putInnerVlanToApplianceMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>>

---

##### `resetApplianceIpAddress` <a name="resetApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetApplianceIpAddress"></a>

```java
public void resetApplianceIpAddress()
```

##### `resetInnerVlanToApplianceMappings` <a name="resetInnerVlanToApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetInnerVlanToApplianceMappings"></a>

```java
public void resetInnerVlanToApplianceMappings()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetVlanId` <a name="resetVlanId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetVlanId"></a>

```java
public void resetVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappings">innerVlanToApplianceMappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddressInput">applianceIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappingsInput">innerVlanToApplianceMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddress">applianceIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `innerVlanToApplianceMappings`<sup>Required</sup> <a name="innerVlanToApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappings"></a>

```java
public GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList getInnerVlanToApplianceMappings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList</a>

---

##### `applianceIpAddressInput`<sup>Optional</sup> <a name="applianceIpAddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddressInput"></a>

```java
public java.lang.String getApplianceIpAddressInput();
```

- *Type:* java.lang.String

---

##### `innerVlanToApplianceMappingsInput`<sup>Optional</sup> <a name="innerVlanToApplianceMappingsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappingsInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings> getInnerVlanToApplianceMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanIdInput"></a>

```java
public java.lang.String getVlanIdInput();
```

- *Type:* java.lang.String

---

##### `applianceIpAddress`<sup>Required</sup> <a name="applianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddress"></a>

```java
public java.lang.String getApplianceIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>

---


### GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference <a name="GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference;

new GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resetVni">resetVni</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVni` <a name="resetVni" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resetVni"></a>

```java
public void resetVni()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vniInput">vniInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vni">vni</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vniInput`<sup>Optional</sup> <a name="vniInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vniInput"></a>

```java
public java.lang.Number getVniInput();
```

- *Type:* java.lang.Number

---

##### `vni`<sup>Required</sup> <a name="vni" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vni"></a>

```java
public java.lang.Number getVni();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.internalValue"></a>

```java
public GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

---


### GoogleComputeInterconnectAttachmentL2ForwardingOutputReference <a name="GoogleComputeInterconnectAttachmentL2ForwardingOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference;

new GoogleComputeInterconnectAttachmentL2ForwardingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.putApplianceMappings">putApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.putGeneveHeader">putGeneveHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetApplianceMappings">resetApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetDefaultApplianceIpAddress">resetDefaultApplianceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetGeneveHeader">resetGeneveHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetTunnelEndpointIpAddress">resetTunnelEndpointIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplianceMappings` <a name="putApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.putApplianceMappings"></a>

```java
public void putApplianceMappings(IResolvable|java.util.List<GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.putApplianceMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>>

---

##### `putGeneveHeader` <a name="putGeneveHeader" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.putGeneveHeader"></a>

```java
public void putGeneveHeader(GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.putGeneveHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

---

##### `resetApplianceMappings` <a name="resetApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetApplianceMappings"></a>

```java
public void resetApplianceMappings()
```

##### `resetDefaultApplianceIpAddress` <a name="resetDefaultApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetDefaultApplianceIpAddress"></a>

```java
public void resetDefaultApplianceIpAddress()
```

##### `resetGeneveHeader` <a name="resetGeneveHeader" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetGeneveHeader"></a>

```java
public void resetGeneveHeader()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetTunnelEndpointIpAddress` <a name="resetTunnelEndpointIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetTunnelEndpointIpAddress"></a>

```java
public void resetTunnelEndpointIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappings">applianceMappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeader">geneveHeader</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappingsInput">applianceMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddressInput">defaultApplianceIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeaderInput">geneveHeaderInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddressInput">tunnelEndpointIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddress">defaultApplianceIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddress">tunnelEndpointIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applianceMappings`<sup>Required</sup> <a name="applianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappings"></a>

```java
public GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList getApplianceMappings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList</a>

---

##### `geneveHeader`<sup>Required</sup> <a name="geneveHeader" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeader"></a>

```java
public GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference getGeneveHeader();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference</a>

---

##### `applianceMappingsInput`<sup>Optional</sup> <a name="applianceMappingsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappingsInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings> getApplianceMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>>

---

##### `defaultApplianceIpAddressInput`<sup>Optional</sup> <a name="defaultApplianceIpAddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddressInput"></a>

```java
public java.lang.String getDefaultApplianceIpAddressInput();
```

- *Type:* java.lang.String

---

##### `geneveHeaderInput`<sup>Optional</sup> <a name="geneveHeaderInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeaderInput"></a>

```java
public GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader getGeneveHeaderInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `tunnelEndpointIpAddressInput`<sup>Optional</sup> <a name="tunnelEndpointIpAddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddressInput"></a>

```java
public java.lang.String getTunnelEndpointIpAddressInput();
```

- *Type:* java.lang.String

---

##### `defaultApplianceIpAddress`<sup>Required</sup> <a name="defaultApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddress"></a>

```java
public java.lang.String getDefaultApplianceIpAddress();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `tunnelEndpointIpAddress`<sup>Required</sup> <a name="tunnelEndpointIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddress"></a>

```java
public java.lang.String getTunnelEndpointIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.internalValue"></a>

```java
public GoogleComputeInterconnectAttachmentL2Forwarding getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a>

---


### GoogleComputeInterconnectAttachmentParamsOutputReference <a name="GoogleComputeInterconnectAttachmentParamsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentParamsOutputReference;

new GoogleComputeInterconnectAttachmentParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.internalValue"></a>

```java
public GoogleComputeInterconnectAttachmentParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a>

---


### GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList <a name="GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList;

new GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.get"></a>

```java
public GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference <a name="GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference;

new GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.tag8021Q">tag8021Q</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo">GoogleComputeInterconnectAttachmentPrivateInterconnectInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tag8021Q`<sup>Required</sup> <a name="tag8021Q" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.tag8021Q"></a>

```java
public java.lang.Number getTag8021Q();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.internalValue"></a>

```java
public GoogleComputeInterconnectAttachmentPrivateInterconnectInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo">GoogleComputeInterconnectAttachmentPrivateInterconnectInfo</a>

---


### GoogleComputeInterconnectAttachmentTimeoutsOutputReference <a name="GoogleComputeInterconnectAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_interconnect_attachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference;

new GoogleComputeInterconnectAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeInterconnectAttachmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>

---



