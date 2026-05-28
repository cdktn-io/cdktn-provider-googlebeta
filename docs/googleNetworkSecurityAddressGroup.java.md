# `googleNetworkSecurityAddressGroup` Submodule <a name="`googleNetworkSecurityAddressGroup` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityAddressGroup <a name="GoogleNetworkSecurityAddressGroup" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group google_network_security_address_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_address_group.GoogleNetworkSecurityAddressGroup;

GoogleNetworkSecurityAddressGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capacity(java.lang.Number)
    .location(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .items(java.util.List<java.lang.String>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .parent(java.lang.String)
//  .purpose(java.util.List<java.lang.String>)
//  .timeouts(GoogleNetworkSecurityAddressGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.capacity">capacity</a></code> | <code>java.lang.Number</code> | Capacity of the Address Group. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the gateway security policy. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the AddressGroup resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the Address Group. Possible values are "IPV4" or "IPV6". Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Free-text description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#id GoogleNetworkSecurityAddressGroup#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.items">items</a></code> | <code>java.util.List<java.lang.String></code> | List of items. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the AddressGroup resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.purpose">purpose</a></code> | <code>java.util.List<java.lang.String></code> | List of supported purposes of the Address Group. Possible values: ["DEFAULT", "CLOUD_ARMOR"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts">GoogleNetworkSecurityAddressGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.capacity"></a>

- *Type:* java.lang.Number

Capacity of the Address Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#capacity GoogleNetworkSecurityAddressGroup#capacity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the gateway security policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#location GoogleNetworkSecurityAddressGroup#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the AddressGroup resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#name GoogleNetworkSecurityAddressGroup#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the Address Group. Possible values are "IPV4" or "IPV6". Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#type GoogleNetworkSecurityAddressGroup#type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#deletion_policy GoogleNetworkSecurityAddressGroup#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#description GoogleNetworkSecurityAddressGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#id GoogleNetworkSecurityAddressGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.items"></a>

- *Type:* java.util.List<java.lang.String>

List of items.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#items GoogleNetworkSecurityAddressGroup#items}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the AddressGroup resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#labels GoogleNetworkSecurityAddressGroup#labels}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#parent GoogleNetworkSecurityAddressGroup#parent}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.purpose"></a>

- *Type:* java.util.List<java.lang.String>

List of supported purposes of the Address Group. Possible values: ["DEFAULT", "CLOUD_ARMOR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#purpose GoogleNetworkSecurityAddressGroup#purpose}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts">GoogleNetworkSecurityAddressGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#timeouts GoogleNetworkSecurityAddressGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetItems">resetItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityAddressGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts">GoogleNetworkSecurityAddressGroupTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetId"></a>

```java
public void resetId()
```

##### `resetItems` <a name="resetItems" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetItems"></a>

```java
public void resetItems()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetParent"></a>

```java
public void resetParent()
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetPurpose"></a>

```java
public void resetPurpose()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityAddressGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_address_group.GoogleNetworkSecurityAddressGroup;

GoogleNetworkSecurityAddressGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_address_group.GoogleNetworkSecurityAddressGroup;

GoogleNetworkSecurityAddressGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_address_group.GoogleNetworkSecurityAddressGroup;

GoogleNetworkSecurityAddressGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_address_group.GoogleNetworkSecurityAddressGroup;

GoogleNetworkSecurityAddressGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityAddressGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkSecurityAddressGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityAddressGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityAddressGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityAddressGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference">GoogleNetworkSecurityAddressGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.capacityInput">capacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.itemsInput">itemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.purposeInput">purposeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts">GoogleNetworkSecurityAddressGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.purpose">purpose</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.timeouts"></a>

```java
public GoogleNetworkSecurityAddressGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference">GoogleNetworkSecurityAddressGroupTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.capacityInput"></a>

```java
public java.lang.Number getCapacityInput();
```

- *Type:* java.lang.Number

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.itemsInput"></a>

```java
public java.util.List<java.lang.String> getItemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.purposeInput"></a>

```java
public java.util.List<java.lang.String> getPurposeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkSecurityAddressGroupTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts">GoogleNetworkSecurityAddressGroupTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.purpose"></a>

```java
public java.util.List<java.lang.String> getPurpose();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityAddressGroupConfig <a name="GoogleNetworkSecurityAddressGroupConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_address_group.GoogleNetworkSecurityAddressGroupConfig;

GoogleNetworkSecurityAddressGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capacity(java.lang.Number)
    .location(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .items(java.util.List<java.lang.String>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .parent(java.lang.String)
//  .purpose(java.util.List<java.lang.String>)
//  .timeouts(GoogleNetworkSecurityAddressGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | Capacity of the Address Group. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the gateway security policy. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the AddressGroup resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the Address Group. Possible values are "IPV4" or "IPV6". Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | Free-text description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#id GoogleNetworkSecurityAddressGroup#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | List of items. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the AddressGroup resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.purpose">purpose</a></code> | <code>java.util.List<java.lang.String></code> | List of supported purposes of the Address Group. Possible values: ["DEFAULT", "CLOUD_ARMOR"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts">GoogleNetworkSecurityAddressGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

Capacity of the Address Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#capacity GoogleNetworkSecurityAddressGroup#capacity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the gateway security policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#location GoogleNetworkSecurityAddressGroup#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the AddressGroup resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#name GoogleNetworkSecurityAddressGroup#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the Address Group. Possible values are "IPV4" or "IPV6". Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#type GoogleNetworkSecurityAddressGroup#type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#deletion_policy GoogleNetworkSecurityAddressGroup#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#description GoogleNetworkSecurityAddressGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#id GoogleNetworkSecurityAddressGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

List of items.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#items GoogleNetworkSecurityAddressGroup#items}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the AddressGroup resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#labels GoogleNetworkSecurityAddressGroup#labels}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#parent GoogleNetworkSecurityAddressGroup#parent}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.purpose"></a>

```java
public java.util.List<java.lang.String> getPurpose();
```

- *Type:* java.util.List<java.lang.String>

List of supported purposes of the Address Group. Possible values: ["DEFAULT", "CLOUD_ARMOR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#purpose GoogleNetworkSecurityAddressGroup#purpose}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityAddressGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts">GoogleNetworkSecurityAddressGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#timeouts GoogleNetworkSecurityAddressGroup#timeouts}

---

### GoogleNetworkSecurityAddressGroupTimeouts <a name="GoogleNetworkSecurityAddressGroupTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_address_group.GoogleNetworkSecurityAddressGroupTimeouts;

GoogleNetworkSecurityAddressGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#create GoogleNetworkSecurityAddressGroup#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#delete GoogleNetworkSecurityAddressGroup#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#update GoogleNetworkSecurityAddressGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#create GoogleNetworkSecurityAddressGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#delete GoogleNetworkSecurityAddressGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_address_group#update GoogleNetworkSecurityAddressGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityAddressGroupTimeoutsOutputReference <a name="GoogleNetworkSecurityAddressGroupTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_address_group.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference;

new GoogleNetworkSecurityAddressGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts">GoogleNetworkSecurityAddressGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkSecurityAddressGroupTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAddressGroup.GoogleNetworkSecurityAddressGroupTimeouts">GoogleNetworkSecurityAddressGroupTimeouts</a>

---



