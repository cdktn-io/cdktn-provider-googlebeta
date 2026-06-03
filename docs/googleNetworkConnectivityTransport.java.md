# `googleNetworkConnectivityTransport` Submodule <a name="`googleNetworkConnectivityTransport` Submodule" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityTransport <a name="GoogleNetworkConnectivityTransport" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport google_network_connectivity_transport}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_transport.GoogleNetworkConnectivityTransport;

GoogleNetworkConnectivityTransport.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .network(java.lang.String)
    .region(java.lang.String)
    .remoteProfile(java.lang.String)
//  .adminEnabled(java.lang.Boolean|IResolvable)
//  .advertisedRoutes(java.util.List<java.lang.String>)
//  .autoAccept(java.lang.Boolean|IResolvable)
//  .bandwidth(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .hub(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mtuLimit(java.lang.Number)
//  .project(java.lang.String)
//  .providedActivationKey(java.lang.String)
//  .pscRoutingEnabled(java.lang.Boolean|IResolvable)
//  .remoteAccountId(java.lang.String)
//  .stackType(java.lang.String)
//  .timeouts(GoogleNetworkConnectivityTransportTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource, see google.aip.dev/122 for resource naming. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | Resource URL of the Network that will be peered with this Transport. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.remoteProfile">remoteProfile</a></code> | <code>java.lang.String</code> | Resource URL of the remoteTransportProfile that this Transport is connecting to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Administrative state of the underlying connectivity. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.advertisedRoutes">advertisedRoutes</a></code> | <code>java.util.List<java.lang.String></code> | List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.autoAccept">autoAccept</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls whether resources proposed by the Transport are automatically accepted on behalf of the user. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.hub">hub</a></code> | <code>java.lang.String</code> | The NCC Hub that the Transport should attach to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#id GoogleNetworkConnectivityTransport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.mtuLimit">mtuLimit</a></code> | <code>java.lang.Number</code> | [Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#project GoogleNetworkConnectivityTransport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.providedActivationKey">providedActivationKey</a></code> | <code>java.lang.String</code> | Key used for establishing a connection with the remote transport. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.pscRoutingEnabled">pscRoutingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls whether a Routing VPC Spoke should be created and attached to the NCC Hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.remoteAccountId">remoteAccountId</a></code> | <code>java.lang.String</code> | The user supplied account id for the CSP associated with the remote profile. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.stackType">stackType</a></code> | <code>java.lang.String</code> | IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource, see google.aip.dev/122 for resource naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#name GoogleNetworkConnectivityTransport#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.network"></a>

- *Type:* java.lang.String

Resource URL of the Network that will be peered with this Transport.

This field must be provided during resource creation and cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#network GoogleNetworkConnectivityTransport#network}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of this resource.

This is required to construct the resource name, but is not sent to the API since the region is already contained in the parent field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#region GoogleNetworkConnectivityTransport#region}

---

##### `remoteProfile`<sup>Required</sup> <a name="remoteProfile" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.remoteProfile"></a>

- *Type:* java.lang.String

Resource URL of the remoteTransportProfile that this Transport is connecting to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#remote_profile GoogleNetworkConnectivityTransport#remote_profile}

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.adminEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Administrative state of the underlying connectivity.

If set to true (default), connectivity should be available between your environments. If set to false, the connectivity over these links is disabled. Disabling your Transport does not affect billing, and retains the underlying network bandwidth associated with the connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#admin_enabled GoogleNetworkConnectivityTransport#admin_enabled}

---

##### `advertisedRoutes`<sup>Optional</sup> <a name="advertisedRoutes" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.advertisedRoutes"></a>

- *Type:* java.util.List<java.lang.String>

List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#advertised_routes GoogleNetworkConnectivityTransport#advertised_routes}

---

##### `autoAccept`<sup>Optional</sup> <a name="autoAccept" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.autoAccept"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls whether resources proposed by the Transport are automatically accepted on behalf of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#auto_accept GoogleNetworkConnectivityTransport#auto_accept}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.bandwidth"></a>

- *Type:* java.lang.String

Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#bandwidth GoogleNetworkConnectivityTransport#bandwidth}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#deletion_policy GoogleNetworkConnectivityTransport#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#description GoogleNetworkConnectivityTransport#description}

---

##### `hub`<sup>Optional</sup> <a name="hub" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.hub"></a>

- *Type:* java.lang.String

The NCC Hub that the Transport should attach to.

The hub must be in the same project as the Transport.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#hub GoogleNetworkConnectivityTransport#hub}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#id GoogleNetworkConnectivityTransport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#labels GoogleNetworkConnectivityTransport#labels}

---

##### `mtuLimit`<sup>Optional</sup> <a name="mtuLimit" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.mtuLimit"></a>

- *Type:* java.lang.Number

[Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#mtu_limit GoogleNetworkConnectivityTransport#mtu_limit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#project GoogleNetworkConnectivityTransport#project}.

---

##### `providedActivationKey`<sup>Optional</sup> <a name="providedActivationKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.providedActivationKey"></a>

- *Type:* java.lang.String

Key used for establishing a connection with the remote transport.

This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#provided_activation_key GoogleNetworkConnectivityTransport#provided_activation_key}

---

##### `pscRoutingEnabled`<sup>Optional</sup> <a name="pscRoutingEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.pscRoutingEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls whether a Routing VPC Spoke should be created and attached to the NCC Hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#psc_routing_enabled GoogleNetworkConnectivityTransport#psc_routing_enabled}

---

##### `remoteAccountId`<sup>Optional</sup> <a name="remoteAccountId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.remoteAccountId"></a>

- *Type:* java.lang.String

The user supplied account id for the CSP associated with the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#remote_account_id GoogleNetworkConnectivityTransport#remote_account_id}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.stackType"></a>

- *Type:* java.lang.String

IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#stack_type GoogleNetworkConnectivityTransport#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#timeouts GoogleNetworkConnectivityTransport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetAdvertisedRoutes">resetAdvertisedRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetAutoAccept">resetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetHub">resetHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetMtuLimit">resetMtuLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetProvidedActivationKey">resetProvidedActivationKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetPscRoutingEnabled">resetPscRoutingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetRemoteAccountId">resetRemoteAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkConnectivityTransportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a>

---

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetAdminEnabled"></a>

```java
public void resetAdminEnabled()
```

##### `resetAdvertisedRoutes` <a name="resetAdvertisedRoutes" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetAdvertisedRoutes"></a>

```java
public void resetAdvertisedRoutes()
```

##### `resetAutoAccept` <a name="resetAutoAccept" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetAutoAccept"></a>

```java
public void resetAutoAccept()
```

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetBandwidth"></a>

```java
public void resetBandwidth()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHub` <a name="resetHub" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetHub"></a>

```java
public void resetHub()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMtuLimit` <a name="resetMtuLimit" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetMtuLimit"></a>

```java
public void resetMtuLimit()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetProject"></a>

```java
public void resetProject()
```

##### `resetProvidedActivationKey` <a name="resetProvidedActivationKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetProvidedActivationKey"></a>

```java
public void resetProvidedActivationKey()
```

##### `resetPscRoutingEnabled` <a name="resetPscRoutingEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetPscRoutingEnabled"></a>

```java
public void resetPscRoutingEnabled()
```

##### `resetRemoteAccountId` <a name="resetRemoteAccountId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetRemoteAccountId"></a>

```java
public void resetRemoteAccountId()
```

##### `resetStackType` <a name="resetStackType" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetStackType"></a>

```java
public void resetStackType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkConnectivityTransport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_transport.GoogleNetworkConnectivityTransport;

GoogleNetworkConnectivityTransport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_transport.GoogleNetworkConnectivityTransport;

GoogleNetworkConnectivityTransport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_transport.GoogleNetworkConnectivityTransport;

GoogleNetworkConnectivityTransport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_transport.GoogleNetworkConnectivityTransport;

GoogleNetworkConnectivityTransport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkConnectivityTransport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkConnectivityTransport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkConnectivityTransport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkConnectivityTransport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityTransport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.generatedActivationKey">generatedActivationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.peeringNetwork">peeringNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference">GoogleNetworkConnectivityTransportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.adminEnabledInput">adminEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.advertisedRoutesInput">advertisedRoutesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.autoAcceptInput">autoAcceptInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.bandwidthInput">bandwidthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.hubInput">hubInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.mtuLimitInput">mtuLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.providedActivationKeyInput">providedActivationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.pscRoutingEnabledInput">pscRoutingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteAccountIdInput">remoteAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteProfileInput">remoteProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.stackTypeInput">stackTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.advertisedRoutes">advertisedRoutes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.autoAccept">autoAccept</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.hub">hub</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.mtuLimit">mtuLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.providedActivationKey">providedActivationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.pscRoutingEnabled">pscRoutingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteAccountId">remoteAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteProfile">remoteProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.stackType">stackType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `generatedActivationKey`<sup>Required</sup> <a name="generatedActivationKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.generatedActivationKey"></a>

```java
public java.lang.String getGeneratedActivationKey();
```

- *Type:* java.lang.String

---

##### `peeringNetwork`<sup>Required</sup> <a name="peeringNetwork" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.peeringNetwork"></a>

```java
public java.lang.String getPeeringNetwork();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.timeouts"></a>

```java
public GoogleNetworkConnectivityTransportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference">GoogleNetworkConnectivityTransportTimeoutsOutputReference</a>

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.adminEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAdminEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `advertisedRoutesInput`<sup>Optional</sup> <a name="advertisedRoutesInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.advertisedRoutesInput"></a>

```java
public java.util.List<java.lang.String> getAdvertisedRoutesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoAcceptInput`<sup>Optional</sup> <a name="autoAcceptInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.autoAcceptInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoAcceptInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.bandwidthInput"></a>

```java
public java.lang.String getBandwidthInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hubInput`<sup>Optional</sup> <a name="hubInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.hubInput"></a>

```java
public java.lang.String getHubInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mtuLimitInput`<sup>Optional</sup> <a name="mtuLimitInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.mtuLimitInput"></a>

```java
public java.lang.Number getMtuLimitInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `providedActivationKeyInput`<sup>Optional</sup> <a name="providedActivationKeyInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.providedActivationKeyInput"></a>

```java
public java.lang.String getProvidedActivationKeyInput();
```

- *Type:* java.lang.String

---

##### `pscRoutingEnabledInput`<sup>Optional</sup> <a name="pscRoutingEnabledInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.pscRoutingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPscRoutingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `remoteAccountIdInput`<sup>Optional</sup> <a name="remoteAccountIdInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteAccountIdInput"></a>

```java
public java.lang.String getRemoteAccountIdInput();
```

- *Type:* java.lang.String

---

##### `remoteProfileInput`<sup>Optional</sup> <a name="remoteProfileInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteProfileInput"></a>

```java
public java.lang.String getRemoteProfileInput();
```

- *Type:* java.lang.String

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.stackTypeInput"></a>

```java
public java.lang.String getStackTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkConnectivityTransportTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a>

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.adminEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAdminEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `advertisedRoutes`<sup>Required</sup> <a name="advertisedRoutes" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.advertisedRoutes"></a>

```java
public java.util.List<java.lang.String> getAdvertisedRoutes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoAccept`<sup>Required</sup> <a name="autoAccept" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.autoAccept"></a>

```java
public java.lang.Boolean|IResolvable getAutoAccept();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.bandwidth"></a>

```java
public java.lang.String getBandwidth();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.hub"></a>

```java
public java.lang.String getHub();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mtuLimit`<sup>Required</sup> <a name="mtuLimit" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.mtuLimit"></a>

```java
public java.lang.Number getMtuLimit();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `providedActivationKey`<sup>Required</sup> <a name="providedActivationKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.providedActivationKey"></a>

```java
public java.lang.String getProvidedActivationKey();
```

- *Type:* java.lang.String

---

##### `pscRoutingEnabled`<sup>Required</sup> <a name="pscRoutingEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.pscRoutingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPscRoutingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `remoteAccountId`<sup>Required</sup> <a name="remoteAccountId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteAccountId"></a>

```java
public java.lang.String getRemoteAccountId();
```

- *Type:* java.lang.String

---

##### `remoteProfile`<sup>Required</sup> <a name="remoteProfile" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteProfile"></a>

```java
public java.lang.String getRemoteProfile();
```

- *Type:* java.lang.String

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityTransportConfig <a name="GoogleNetworkConnectivityTransportConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_transport.GoogleNetworkConnectivityTransportConfig;

GoogleNetworkConnectivityTransportConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .network(java.lang.String)
    .region(java.lang.String)
    .remoteProfile(java.lang.String)
//  .adminEnabled(java.lang.Boolean|IResolvable)
//  .advertisedRoutes(java.util.List<java.lang.String>)
//  .autoAccept(java.lang.Boolean|IResolvable)
//  .bandwidth(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .hub(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mtuLimit(java.lang.Number)
//  .project(java.lang.String)
//  .providedActivationKey(java.lang.String)
//  .pscRoutingEnabled(java.lang.Boolean|IResolvable)
//  .remoteAccountId(java.lang.String)
//  .stackType(java.lang.String)
//  .timeouts(GoogleNetworkConnectivityTransportTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource, see google.aip.dev/122 for resource naming. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.network">network</a></code> | <code>java.lang.String</code> | Resource URL of the Network that will be peered with this Transport. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.remoteProfile">remoteProfile</a></code> | <code>java.lang.String</code> | Resource URL of the remoteTransportProfile that this Transport is connecting to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Administrative state of the underlying connectivity. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.advertisedRoutes">advertisedRoutes</a></code> | <code>java.util.List<java.lang.String></code> | List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.autoAccept">autoAccept</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls whether resources proposed by the Transport are automatically accepted on behalf of the user. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.hub">hub</a></code> | <code>java.lang.String</code> | The NCC Hub that the Transport should attach to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#id GoogleNetworkConnectivityTransport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.mtuLimit">mtuLimit</a></code> | <code>java.lang.Number</code> | [Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#project GoogleNetworkConnectivityTransport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.providedActivationKey">providedActivationKey</a></code> | <code>java.lang.String</code> | Key used for establishing a connection with the remote transport. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.pscRoutingEnabled">pscRoutingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls whether a Routing VPC Spoke should be created and attached to the NCC Hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.remoteAccountId">remoteAccountId</a></code> | <code>java.lang.String</code> | The user supplied account id for the CSP associated with the remote profile. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.stackType">stackType</a></code> | <code>java.lang.String</code> | IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource, see google.aip.dev/122 for resource naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#name GoogleNetworkConnectivityTransport#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Resource URL of the Network that will be peered with this Transport.

This field must be provided during resource creation and cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#network GoogleNetworkConnectivityTransport#network}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of this resource.

This is required to construct the resource name, but is not sent to the API since the region is already contained in the parent field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#region GoogleNetworkConnectivityTransport#region}

---

##### `remoteProfile`<sup>Required</sup> <a name="remoteProfile" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.remoteProfile"></a>

```java
public java.lang.String getRemoteProfile();
```

- *Type:* java.lang.String

Resource URL of the remoteTransportProfile that this Transport is connecting to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#remote_profile GoogleNetworkConnectivityTransport#remote_profile}

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.adminEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAdminEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Administrative state of the underlying connectivity.

If set to true (default), connectivity should be available between your environments. If set to false, the connectivity over these links is disabled. Disabling your Transport does not affect billing, and retains the underlying network bandwidth associated with the connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#admin_enabled GoogleNetworkConnectivityTransport#admin_enabled}

---

##### `advertisedRoutes`<sup>Optional</sup> <a name="advertisedRoutes" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.advertisedRoutes"></a>

```java
public java.util.List<java.lang.String> getAdvertisedRoutes();
```

- *Type:* java.util.List<java.lang.String>

List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#advertised_routes GoogleNetworkConnectivityTransport#advertised_routes}

---

##### `autoAccept`<sup>Optional</sup> <a name="autoAccept" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.autoAccept"></a>

```java
public java.lang.Boolean|IResolvable getAutoAccept();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls whether resources proposed by the Transport are automatically accepted on behalf of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#auto_accept GoogleNetworkConnectivityTransport#auto_accept}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.bandwidth"></a>

```java
public java.lang.String getBandwidth();
```

- *Type:* java.lang.String

Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#bandwidth GoogleNetworkConnectivityTransport#bandwidth}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#deletion_policy GoogleNetworkConnectivityTransport#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#description GoogleNetworkConnectivityTransport#description}

---

##### `hub`<sup>Optional</sup> <a name="hub" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.hub"></a>

```java
public java.lang.String getHub();
```

- *Type:* java.lang.String

The NCC Hub that the Transport should attach to.

The hub must be in the same project as the Transport.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#hub GoogleNetworkConnectivityTransport#hub}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#id GoogleNetworkConnectivityTransport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#labels GoogleNetworkConnectivityTransport#labels}

---

##### `mtuLimit`<sup>Optional</sup> <a name="mtuLimit" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.mtuLimit"></a>

```java
public java.lang.Number getMtuLimit();
```

- *Type:* java.lang.Number

[Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#mtu_limit GoogleNetworkConnectivityTransport#mtu_limit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#project GoogleNetworkConnectivityTransport#project}.

---

##### `providedActivationKey`<sup>Optional</sup> <a name="providedActivationKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.providedActivationKey"></a>

```java
public java.lang.String getProvidedActivationKey();
```

- *Type:* java.lang.String

Key used for establishing a connection with the remote transport.

This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#provided_activation_key GoogleNetworkConnectivityTransport#provided_activation_key}

---

##### `pscRoutingEnabled`<sup>Optional</sup> <a name="pscRoutingEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.pscRoutingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPscRoutingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls whether a Routing VPC Spoke should be created and attached to the NCC Hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#psc_routing_enabled GoogleNetworkConnectivityTransport#psc_routing_enabled}

---

##### `remoteAccountId`<sup>Optional</sup> <a name="remoteAccountId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.remoteAccountId"></a>

```java
public java.lang.String getRemoteAccountId();
```

- *Type:* java.lang.String

The user supplied account id for the CSP associated with the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#remote_account_id GoogleNetworkConnectivityTransport#remote_account_id}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#stack_type GoogleNetworkConnectivityTransport#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.timeouts"></a>

```java
public GoogleNetworkConnectivityTransportTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#timeouts GoogleNetworkConnectivityTransport#timeouts}

---

### GoogleNetworkConnectivityTransportTimeouts <a name="GoogleNetworkConnectivityTransportTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_transport.GoogleNetworkConnectivityTransportTimeouts;

GoogleNetworkConnectivityTransportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#create GoogleNetworkConnectivityTransport#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#delete GoogleNetworkConnectivityTransport#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#update GoogleNetworkConnectivityTransport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#create GoogleNetworkConnectivityTransport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#delete GoogleNetworkConnectivityTransport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_connectivity_transport#update GoogleNetworkConnectivityTransport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityTransportTimeoutsOutputReference <a name="GoogleNetworkConnectivityTransportTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_connectivity_transport.GoogleNetworkConnectivityTransportTimeoutsOutputReference;

new GoogleNetworkConnectivityTransportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkConnectivityTransportTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a>

---



