# `googleNetworkSecurityFirewallEndpoint` Submodule <a name="`googleNetworkSecurityFirewallEndpoint` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityFirewallEndpoint <a name="GoogleNetworkSecurityFirewallEndpoint" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint google_network_security_firewall_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpoint;

GoogleNetworkSecurityFirewallEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .parent(java.lang.String)
//  .billingProjectId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .endpointSettings(GoogleNetworkSecurityFirewallEndpointEndpointSettings)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GoogleNetworkSecurityFirewallEndpointTimeouts)
//  .wildfireSettings(GoogleNetworkSecurityFirewallEndpointWildfireSettings)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location (zone) of the firewall endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the firewall endpoint resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.billingProjectId">billingProjectId</a></code> | <code>java.lang.String</code> | Project to charge for the deployed firewall endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.endpointSettings">endpointSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a></code> | endpoint_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#id GoogleNetworkSecurityFirewallEndpoint#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.wildfireSettings">wildfireSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettings</a></code> | wildfire_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location (zone) of the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#location GoogleNetworkSecurityFirewallEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the firewall endpoint resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#name GoogleNetworkSecurityFirewallEndpoint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#parent GoogleNetworkSecurityFirewallEndpoint#parent}

---

##### `billingProjectId`<sup>Optional</sup> <a name="billingProjectId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.billingProjectId"></a>

- *Type:* java.lang.String

Project to charge for the deployed firewall endpoint.

This field is required for organization-scoped endpoints.
For project-scoped endpoints, it is optional but must match the
endpoint's project if specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#billing_project_id GoogleNetworkSecurityFirewallEndpoint#billing_project_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#deletion_policy GoogleNetworkSecurityFirewallEndpoint#deletion_policy}

---

##### `endpointSettings`<sup>Optional</sup> <a name="endpointSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.endpointSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a>

endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#endpoint_settings GoogleNetworkSecurityFirewallEndpoint#endpoint_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#id GoogleNetworkSecurityFirewallEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#labels GoogleNetworkSecurityFirewallEndpoint#labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#timeouts GoogleNetworkSecurityFirewallEndpoint#timeouts}

---

##### `wildfireSettings`<sup>Optional</sup> <a name="wildfireSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.Initializer.parameter.wildfireSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettings</a>

wildfire_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#wildfire_settings GoogleNetworkSecurityFirewallEndpoint#wildfire_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putEndpointSettings">putEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putWildfireSettings">putWildfireSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetBillingProjectId">resetBillingProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetEndpointSettings">resetEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetWildfireSettings">resetWildfireSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointSettings` <a name="putEndpointSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putEndpointSettings"></a>

```java
public void putEndpointSettings(GoogleNetworkSecurityFirewallEndpointEndpointSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putEndpointSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityFirewallEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a>

---

##### `putWildfireSettings` <a name="putWildfireSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putWildfireSettings"></a>

```java
public void putWildfireSettings(GoogleNetworkSecurityFirewallEndpointWildfireSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.putWildfireSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettings</a>

---

##### `resetBillingProjectId` <a name="resetBillingProjectId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetBillingProjectId"></a>

```java
public void resetBillingProjectId()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEndpointSettings` <a name="resetEndpointSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetEndpointSettings"></a>

```java
public void resetEndpointSettings()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWildfireSettings` <a name="resetWildfireSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.resetWildfireSettings"></a>

```java
public void resetWildfireSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityFirewallEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpoint;

GoogleNetworkSecurityFirewallEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpoint;

GoogleNetworkSecurityFirewallEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpoint;

GoogleNetworkSecurityFirewallEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpoint;

GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkSecurityFirewallEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityFirewallEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityFirewallEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityFirewallEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.associatedNetworks">associatedNetworks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.endpointSettings">endpointSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference">GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.reconciling">reconciling</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference">GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.wildfireSettings">wildfireSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference">GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.billingProjectIdInput">billingProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.endpointSettingsInput">endpointSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.wildfireSettingsInput">wildfireSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.billingProjectId">billingProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associatedNetworks`<sup>Required</sup> <a name="associatedNetworks" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.associatedNetworks"></a>

```java
public java.util.List<java.lang.String> getAssociatedNetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `endpointSettings`<sup>Required</sup> <a name="endpointSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.endpointSettings"></a>

```java
public GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference getEndpointSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference">GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.timeouts"></a>

```java
public GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference">GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `wildfireSettings`<sup>Required</sup> <a name="wildfireSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.wildfireSettings"></a>

```java
public GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference getWildfireSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference">GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference</a>

---

##### `billingProjectIdInput`<sup>Optional</sup> <a name="billingProjectIdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.billingProjectIdInput"></a>

```java
public java.lang.String getBillingProjectIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `endpointSettingsInput`<sup>Optional</sup> <a name="endpointSettingsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.endpointSettingsInput"></a>

```java
public GoogleNetworkSecurityFirewallEndpointEndpointSettings getEndpointSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkSecurityFirewallEndpointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a>

---

##### `wildfireSettingsInput`<sup>Optional</sup> <a name="wildfireSettingsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.wildfireSettingsInput"></a>

```java
public GoogleNetworkSecurityFirewallEndpointWildfireSettings getWildfireSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettings</a>

---

##### `billingProjectId`<sup>Required</sup> <a name="billingProjectId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.billingProjectId"></a>

```java
public java.lang.String getBillingProjectId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityFirewallEndpointConfig <a name="GoogleNetworkSecurityFirewallEndpointConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpointConfig;

GoogleNetworkSecurityFirewallEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .parent(java.lang.String)
//  .billingProjectId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .endpointSettings(GoogleNetworkSecurityFirewallEndpointEndpointSettings)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GoogleNetworkSecurityFirewallEndpointTimeouts)
//  .wildfireSettings(GoogleNetworkSecurityFirewallEndpointWildfireSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location (zone) of the firewall endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the firewall endpoint resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.billingProjectId">billingProjectId</a></code> | <code>java.lang.String</code> | Project to charge for the deployed firewall endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.endpointSettings">endpointSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a></code> | endpoint_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#id GoogleNetworkSecurityFirewallEndpoint#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.wildfireSettings">wildfireSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettings</a></code> | wildfire_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location (zone) of the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#location GoogleNetworkSecurityFirewallEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the firewall endpoint resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#name GoogleNetworkSecurityFirewallEndpoint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#parent GoogleNetworkSecurityFirewallEndpoint#parent}

---

##### `billingProjectId`<sup>Optional</sup> <a name="billingProjectId" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.billingProjectId"></a>

```java
public java.lang.String getBillingProjectId();
```

- *Type:* java.lang.String

Project to charge for the deployed firewall endpoint.

This field is required for organization-scoped endpoints.
For project-scoped endpoints, it is optional but must match the
endpoint's project if specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#billing_project_id GoogleNetworkSecurityFirewallEndpoint#billing_project_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#deletion_policy GoogleNetworkSecurityFirewallEndpoint#deletion_policy}

---

##### `endpointSettings`<sup>Optional</sup> <a name="endpointSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.endpointSettings"></a>

```java
public GoogleNetworkSecurityFirewallEndpointEndpointSettings getEndpointSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a>

endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#endpoint_settings GoogleNetworkSecurityFirewallEndpoint#endpoint_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#id GoogleNetworkSecurityFirewallEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#labels GoogleNetworkSecurityFirewallEndpoint#labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityFirewallEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#timeouts GoogleNetworkSecurityFirewallEndpoint#timeouts}

---

##### `wildfireSettings`<sup>Optional</sup> <a name="wildfireSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointConfig.property.wildfireSettings"></a>

```java
public GoogleNetworkSecurityFirewallEndpointWildfireSettings getWildfireSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettings</a>

wildfire_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#wildfire_settings GoogleNetworkSecurityFirewallEndpoint#wildfire_settings}

---

### GoogleNetworkSecurityFirewallEndpointEndpointSettings <a name="GoogleNetworkSecurityFirewallEndpointEndpointSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings;

GoogleNetworkSecurityFirewallEndpointEndpointSettings.builder()
//  .contentCloudRegion(java.lang.String)
//  .httpPartialResponseBlocked(java.lang.Boolean|IResolvable)
//  .jumboFramesEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings.property.contentCloudRegion">contentCloudRegion</a></code> | <code>java.lang.String</code> | The Palo Alto Networks content cloud region of the firewall endpoint, for example 'US_CENTRAL' or 'CANADA'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings.property.httpPartialResponseBlocked">httpPartialResponseBlocked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to block HTTP partial responses for the firewall endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings.property.jumboFramesEnabled">jumboFramesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether Jumbo Frames are enabled for the firewall endpoint. |

---

##### `contentCloudRegion`<sup>Optional</sup> <a name="contentCloudRegion" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings.property.contentCloudRegion"></a>

```java
public java.lang.String getContentCloudRegion();
```

- *Type:* java.lang.String

The Palo Alto Networks content cloud region of the firewall endpoint, for example 'US_CENTRAL' or 'CANADA'.

See
[API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#contentcloudregion)
for the list of supported regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#content_cloud_region GoogleNetworkSecurityFirewallEndpoint#content_cloud_region}

---

##### `httpPartialResponseBlocked`<sup>Optional</sup> <a name="httpPartialResponseBlocked" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings.property.httpPartialResponseBlocked"></a>

```java
public java.lang.Boolean|IResolvable getHttpPartialResponseBlocked();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to block HTTP partial responses for the firewall endpoint.

When 'true', resumption of blocked malicious HTTP file downloads is
blocked by the firewall. 'false' provides maximum availability, 'true'
provides maximum security.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#http_partial_response_blocked GoogleNetworkSecurityFirewallEndpoint#http_partial_response_blocked}

---

##### `jumboFramesEnabled`<sup>Optional</sup> <a name="jumboFramesEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings.property.jumboFramesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getJumboFramesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether Jumbo Frames are enabled for the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#jumbo_frames_enabled GoogleNetworkSecurityFirewallEndpoint#jumbo_frames_enabled}

---

### GoogleNetworkSecurityFirewallEndpointTimeouts <a name="GoogleNetworkSecurityFirewallEndpointTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpointTimeouts;

GoogleNetworkSecurityFirewallEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#create GoogleNetworkSecurityFirewallEndpoint#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#delete GoogleNetworkSecurityFirewallEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#update GoogleNetworkSecurityFirewallEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#create GoogleNetworkSecurityFirewallEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#delete GoogleNetworkSecurityFirewallEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#update GoogleNetworkSecurityFirewallEndpoint#update}.

---

### GoogleNetworkSecurityFirewallEndpointWildfireSettings <a name="GoogleNetworkSecurityFirewallEndpointWildfireSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings;

GoogleNetworkSecurityFirewallEndpointWildfireSettings.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .wildfireInlineCloudAnalysisSettings(GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings)
//  .wildfireRealtimeLookupDuration(java.lang.String)
//  .wildfireRealtimeLookupTimeoutAction(java.lang.String)
//  .wildfireRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether WildFire is enabled for the firewall endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings.property.wildfireInlineCloudAnalysisSettings">wildfireInlineCloudAnalysisSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a></code> | wildfire_inline_cloud_analysis_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRealtimeLookupDuration">wildfireRealtimeLookupDuration</a></code> | <code>java.lang.String</code> | The duration for which the firewall endpoint waits for a real-time signature lookup response from the WildFire cloud before taking the configured timeout action (1ms to 5000ms, default 1000ms). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRealtimeLookupTimeoutAction">wildfireRealtimeLookupTimeoutAction</a></code> | <code>java.lang.String</code> | The action to take when a WildFire real-time signature lookup times out. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRegion">wildfireRegion</a></code> | <code>java.lang.String</code> | The WildFire region for the firewall endpoint, for example 'UNITED_STATES' or 'CANADA'. See [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#wildfireregion) for the list of supported regions. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether WildFire is enabled for the firewall endpoint.

Enabling WildFire requires accepting the WildFire end-user license
agreement (EULA) for the endpoint's billing project; see
[Configure WildFire](https://docs.cloud.google.com/firewall/docs/configure-wildfire).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#enabled GoogleNetworkSecurityFirewallEndpoint#enabled}

---

##### `wildfireInlineCloudAnalysisSettings`<sup>Optional</sup> <a name="wildfireInlineCloudAnalysisSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings.property.wildfireInlineCloudAnalysisSettings"></a>

```java
public GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings getWildfireInlineCloudAnalysisSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a>

wildfire_inline_cloud_analysis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#wildfire_inline_cloud_analysis_settings GoogleNetworkSecurityFirewallEndpoint#wildfire_inline_cloud_analysis_settings}

---

##### `wildfireRealtimeLookupDuration`<sup>Optional</sup> <a name="wildfireRealtimeLookupDuration" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRealtimeLookupDuration"></a>

```java
public java.lang.String getWildfireRealtimeLookupDuration();
```

- *Type:* java.lang.String

The duration for which the firewall endpoint waits for a real-time signature lookup response from the WildFire cloud before taking the configured timeout action (1ms to 5000ms, default 1000ms).

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#wildfire_realtime_lookup_duration GoogleNetworkSecurityFirewallEndpoint#wildfire_realtime_lookup_duration}

---

##### `wildfireRealtimeLookupTimeoutAction`<sup>Optional</sup> <a name="wildfireRealtimeLookupTimeoutAction" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRealtimeLookupTimeoutAction"></a>

```java
public java.lang.String getWildfireRealtimeLookupTimeoutAction();
```

- *Type:* java.lang.String

The action to take when a WildFire real-time signature lookup times out. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#wildfire_realtime_lookup_timeout_action GoogleNetworkSecurityFirewallEndpoint#wildfire_realtime_lookup_timeout_action}

---

##### `wildfireRegion`<sup>Optional</sup> <a name="wildfireRegion" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRegion"></a>

```java
public java.lang.String getWildfireRegion();
```

- *Type:* java.lang.String

The WildFire region for the firewall endpoint, for example 'UNITED_STATES' or 'CANADA'. See [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#wildfireregion) for the list of supported regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#wildfire_region GoogleNetworkSecurityFirewallEndpoint#wildfire_region}

---

### GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings <a name="GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings;

GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.builder()
//  .maxAnalysisDuration(java.lang.String)
//  .submissionTimeoutLoggingDisabled(java.lang.Boolean|IResolvable)
//  .timeoutAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.maxAnalysisDuration">maxAnalysisDuration</a></code> | <code>java.lang.String</code> | The maximum duration for which the firewall endpoint holds a file while waiting for an inline cloud analysis verdict before taking the configured timeout action (1ms to 240000ms, default 30000ms). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.submissionTimeoutLoggingDisabled">submissionTimeoutLoggingDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether logging is disabled when a WildFire inline cloud analysis submission times out. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.timeoutAction">timeoutAction</a></code> | <code>java.lang.String</code> | The action to take when WildFire inline cloud analysis times out. Possible values: ["ALLOW", "DENY"]. |

---

##### `maxAnalysisDuration`<sup>Optional</sup> <a name="maxAnalysisDuration" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.maxAnalysisDuration"></a>

```java
public java.lang.String getMaxAnalysisDuration();
```

- *Type:* java.lang.String

The maximum duration for which the firewall endpoint holds a file while waiting for an inline cloud analysis verdict before taking the configured timeout action (1ms to 240000ms, default 30000ms).

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "30s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#max_analysis_duration GoogleNetworkSecurityFirewallEndpoint#max_analysis_duration}

---

##### `submissionTimeoutLoggingDisabled`<sup>Optional</sup> <a name="submissionTimeoutLoggingDisabled" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.submissionTimeoutLoggingDisabled"></a>

```java
public java.lang.Boolean|IResolvable getSubmissionTimeoutLoggingDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether logging is disabled when a WildFire inline cloud analysis submission times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#submission_timeout_logging_disabled GoogleNetworkSecurityFirewallEndpoint#submission_timeout_logging_disabled}

---

##### `timeoutAction`<sup>Optional</sup> <a name="timeoutAction" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.timeoutAction"></a>

```java
public java.lang.String getTimeoutAction();
```

- *Type:* java.lang.String

The action to take when WildFire inline cloud analysis times out. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_network_security_firewall_endpoint#timeout_action GoogleNetworkSecurityFirewallEndpoint#timeout_action}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference <a name="GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference;

new GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetContentCloudRegion">resetContentCloudRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetHttpPartialResponseBlocked">resetHttpPartialResponseBlocked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetJumboFramesEnabled">resetJumboFramesEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentCloudRegion` <a name="resetContentCloudRegion" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetContentCloudRegion"></a>

```java
public void resetContentCloudRegion()
```

##### `resetHttpPartialResponseBlocked` <a name="resetHttpPartialResponseBlocked" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetHttpPartialResponseBlocked"></a>

```java
public void resetHttpPartialResponseBlocked()
```

##### `resetJumboFramesEnabled` <a name="resetJumboFramesEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetJumboFramesEnabled"></a>

```java
public void resetJumboFramesEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.contentCloudRegionInput">contentCloudRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.httpPartialResponseBlockedInput">httpPartialResponseBlockedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabledInput">jumboFramesEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.contentCloudRegion">contentCloudRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.httpPartialResponseBlocked">httpPartialResponseBlocked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabled">jumboFramesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentCloudRegionInput`<sup>Optional</sup> <a name="contentCloudRegionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.contentCloudRegionInput"></a>

```java
public java.lang.String getContentCloudRegionInput();
```

- *Type:* java.lang.String

---

##### `httpPartialResponseBlockedInput`<sup>Optional</sup> <a name="httpPartialResponseBlockedInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.httpPartialResponseBlockedInput"></a>

```java
public java.lang.Boolean|IResolvable getHttpPartialResponseBlockedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `jumboFramesEnabledInput`<sup>Optional</sup> <a name="jumboFramesEnabledInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getJumboFramesEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `contentCloudRegion`<sup>Required</sup> <a name="contentCloudRegion" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.contentCloudRegion"></a>

```java
public java.lang.String getContentCloudRegion();
```

- *Type:* java.lang.String

---

##### `httpPartialResponseBlocked`<sup>Required</sup> <a name="httpPartialResponseBlocked" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.httpPartialResponseBlocked"></a>

```java
public java.lang.Boolean|IResolvable getHttpPartialResponseBlocked();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `jumboFramesEnabled`<sup>Required</sup> <a name="jumboFramesEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getJumboFramesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityFirewallEndpointEndpointSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointEndpointSettings">GoogleNetworkSecurityFirewallEndpointEndpointSettings</a>

---


### GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference <a name="GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference;

new GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkSecurityFirewallEndpointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointTimeouts">GoogleNetworkSecurityFirewallEndpointTimeouts</a>

---


### GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference <a name="GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference;

new GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.putWildfireInlineCloudAnalysisSettings">putWildfireInlineCloudAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireInlineCloudAnalysisSettings">resetWildfireInlineCloudAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRealtimeLookupDuration">resetWildfireRealtimeLookupDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRealtimeLookupTimeoutAction">resetWildfireRealtimeLookupTimeoutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRegion">resetWildfireRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWildfireInlineCloudAnalysisSettings` <a name="putWildfireInlineCloudAnalysisSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.putWildfireInlineCloudAnalysisSettings"></a>

```java
public void putWildfireInlineCloudAnalysisSettings(GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.putWildfireInlineCloudAnalysisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetWildfireInlineCloudAnalysisSettings` <a name="resetWildfireInlineCloudAnalysisSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireInlineCloudAnalysisSettings"></a>

```java
public void resetWildfireInlineCloudAnalysisSettings()
```

##### `resetWildfireRealtimeLookupDuration` <a name="resetWildfireRealtimeLookupDuration" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRealtimeLookupDuration"></a>

```java
public void resetWildfireRealtimeLookupDuration()
```

##### `resetWildfireRealtimeLookupTimeoutAction` <a name="resetWildfireRealtimeLookupTimeoutAction" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRealtimeLookupTimeoutAction"></a>

```java
public void resetWildfireRealtimeLookupTimeoutAction()
```

##### `resetWildfireRegion` <a name="resetWildfireRegion" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRegion"></a>

```java
public void resetWildfireRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireInlineCloudAnalysisSettings">wildfireInlineCloudAnalysisSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference">GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireInlineCloudAnalysisSettingsInput">wildfireInlineCloudAnalysisSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupDurationInput">wildfireRealtimeLookupDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupTimeoutActionInput">wildfireRealtimeLookupTimeoutActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRegionInput">wildfireRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupDuration">wildfireRealtimeLookupDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupTimeoutAction">wildfireRealtimeLookupTimeoutAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRegion">wildfireRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `wildfireInlineCloudAnalysisSettings`<sup>Required</sup> <a name="wildfireInlineCloudAnalysisSettings" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireInlineCloudAnalysisSettings"></a>

```java
public GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference getWildfireInlineCloudAnalysisSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference">GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `wildfireInlineCloudAnalysisSettingsInput`<sup>Optional</sup> <a name="wildfireInlineCloudAnalysisSettingsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireInlineCloudAnalysisSettingsInput"></a>

```java
public GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings getWildfireInlineCloudAnalysisSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a>

---

##### `wildfireRealtimeLookupDurationInput`<sup>Optional</sup> <a name="wildfireRealtimeLookupDurationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupDurationInput"></a>

```java
public java.lang.String getWildfireRealtimeLookupDurationInput();
```

- *Type:* java.lang.String

---

##### `wildfireRealtimeLookupTimeoutActionInput`<sup>Optional</sup> <a name="wildfireRealtimeLookupTimeoutActionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupTimeoutActionInput"></a>

```java
public java.lang.String getWildfireRealtimeLookupTimeoutActionInput();
```

- *Type:* java.lang.String

---

##### `wildfireRegionInput`<sup>Optional</sup> <a name="wildfireRegionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRegionInput"></a>

```java
public java.lang.String getWildfireRegionInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `wildfireRealtimeLookupDuration`<sup>Required</sup> <a name="wildfireRealtimeLookupDuration" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupDuration"></a>

```java
public java.lang.String getWildfireRealtimeLookupDuration();
```

- *Type:* java.lang.String

---

##### `wildfireRealtimeLookupTimeoutAction`<sup>Required</sup> <a name="wildfireRealtimeLookupTimeoutAction" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupTimeoutAction"></a>

```java
public java.lang.String getWildfireRealtimeLookupTimeoutAction();
```

- *Type:* java.lang.String

---

##### `wildfireRegion`<sup>Required</sup> <a name="wildfireRegion" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRegion"></a>

```java
public java.lang.String getWildfireRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityFirewallEndpointWildfireSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettings</a>

---


### GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference <a name="GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_firewall_endpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference;

new GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetMaxAnalysisDuration">resetMaxAnalysisDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetSubmissionTimeoutLoggingDisabled">resetSubmissionTimeoutLoggingDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetTimeoutAction">resetTimeoutAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAnalysisDuration` <a name="resetMaxAnalysisDuration" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetMaxAnalysisDuration"></a>

```java
public void resetMaxAnalysisDuration()
```

##### `resetSubmissionTimeoutLoggingDisabled` <a name="resetSubmissionTimeoutLoggingDisabled" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetSubmissionTimeoutLoggingDisabled"></a>

```java
public void resetSubmissionTimeoutLoggingDisabled()
```

##### `resetTimeoutAction` <a name="resetTimeoutAction" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetTimeoutAction"></a>

```java
public void resetTimeoutAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.maxAnalysisDurationInput">maxAnalysisDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.submissionTimeoutLoggingDisabledInput">submissionTimeoutLoggingDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.timeoutActionInput">timeoutActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.maxAnalysisDuration">maxAnalysisDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.submissionTimeoutLoggingDisabled">submissionTimeoutLoggingDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.timeoutAction">timeoutAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxAnalysisDurationInput`<sup>Optional</sup> <a name="maxAnalysisDurationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.maxAnalysisDurationInput"></a>

```java
public java.lang.String getMaxAnalysisDurationInput();
```

- *Type:* java.lang.String

---

##### `submissionTimeoutLoggingDisabledInput`<sup>Optional</sup> <a name="submissionTimeoutLoggingDisabledInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.submissionTimeoutLoggingDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSubmissionTimeoutLoggingDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutActionInput`<sup>Optional</sup> <a name="timeoutActionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.timeoutActionInput"></a>

```java
public java.lang.String getTimeoutActionInput();
```

- *Type:* java.lang.String

---

##### `maxAnalysisDuration`<sup>Required</sup> <a name="maxAnalysisDuration" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.maxAnalysisDuration"></a>

```java
public java.lang.String getMaxAnalysisDuration();
```

- *Type:* java.lang.String

---

##### `submissionTimeoutLoggingDisabled`<sup>Required</sup> <a name="submissionTimeoutLoggingDisabled" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.submissionTimeoutLoggingDisabled"></a>

```java
public java.lang.Boolean|IResolvable getSubmissionTimeoutLoggingDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.timeoutAction"></a>

```java
public java.lang.String getTimeoutAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityFirewallEndpoint.GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">GoogleNetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a>

---



