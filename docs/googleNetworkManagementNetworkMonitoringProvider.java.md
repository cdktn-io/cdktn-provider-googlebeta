# `googleNetworkManagementNetworkMonitoringProvider` Submodule <a name="`googleNetworkManagementNetworkMonitoringProvider` Submodule" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkManagementNetworkMonitoringProvider <a name="GoogleNetworkManagementNetworkMonitoringProvider" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider google_network_management_network_monitoring_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_network_monitoring_provider.GoogleNetworkManagementNetworkMonitoringProvider;

GoogleNetworkManagementNetworkMonitoringProvider.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .networkMonitoringProviderId(java.lang.String)
    .providerType(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkManagementNetworkMonitoringProviderTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the Network Monitoring Provider. Currently only 'global' is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.networkMonitoringProviderId">networkMonitoringProviderId</a></code> | <code>java.lang.String</code> | The ID to use for the Network Monitoring Provider. This will become the last component of the provider's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.providerType">providerType</a></code> | <code>java.lang.String</code> | The type of the Network Monitoring Provider. Currently only 'EXTERNAL' is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The deletion policy for the Network Monitoring Provider. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#id GoogleNetworkManagementNetworkMonitoringProvider#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#project GoogleNetworkManagementNetworkMonitoringProvider#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts">GoogleNetworkManagementNetworkMonitoringProviderTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the Network Monitoring Provider. Currently only 'global' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#location GoogleNetworkManagementNetworkMonitoringProvider#location}

---

##### `networkMonitoringProviderId`<sup>Required</sup> <a name="networkMonitoringProviderId" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.networkMonitoringProviderId"></a>

- *Type:* java.lang.String

The ID to use for the Network Monitoring Provider. This will become the last component of the provider's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#network_monitoring_provider_id GoogleNetworkManagementNetworkMonitoringProvider#network_monitoring_provider_id}

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.providerType"></a>

- *Type:* java.lang.String

The type of the Network Monitoring Provider. Currently only 'EXTERNAL' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#provider_type GoogleNetworkManagementNetworkMonitoringProvider#provider_type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

The deletion policy for the Network Monitoring Provider.

Setting 'deletion_policy = "FORCE"' forces the deletion of all nested resources
(MonitoringPoints, NetworkPaths, WebPaths) belonging to this provider on deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#deletion_policy GoogleNetworkManagementNetworkMonitoringProvider#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#id GoogleNetworkManagementNetworkMonitoringProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#project GoogleNetworkManagementNetworkMonitoringProvider#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts">GoogleNetworkManagementNetworkMonitoringProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#timeouts GoogleNetworkManagementNetworkMonitoringProvider#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkManagementNetworkMonitoringProviderTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts">GoogleNetworkManagementNetworkMonitoringProviderTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkManagementNetworkMonitoringProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_network_monitoring_provider.GoogleNetworkManagementNetworkMonitoringProvider;

GoogleNetworkManagementNetworkMonitoringProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_network_monitoring_provider.GoogleNetworkManagementNetworkMonitoringProvider;

GoogleNetworkManagementNetworkMonitoringProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_network_monitoring_provider.GoogleNetworkManagementNetworkMonitoringProvider;

GoogleNetworkManagementNetworkMonitoringProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_network_monitoring_provider.GoogleNetworkManagementNetworkMonitoringProvider;

GoogleNetworkManagementNetworkMonitoringProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkManagementNetworkMonitoringProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkManagementNetworkMonitoringProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkManagementNetworkMonitoringProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkManagementNetworkMonitoringProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkManagementNetworkMonitoringProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.errors">errors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.providerUri">providerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference">GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.networkMonitoringProviderIdInput">networkMonitoringProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.providerTypeInput">providerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts">GoogleNetworkManagementNetworkMonitoringProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.networkMonitoringProviderId">networkMonitoringProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.providerType">providerType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.errors"></a>

```java
public java.util.List<java.lang.String> getErrors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerUri`<sup>Required</sup> <a name="providerUri" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.providerUri"></a>

```java
public java.lang.String getProviderUri();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.timeouts"></a>

```java
public GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference">GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `networkMonitoringProviderIdInput`<sup>Optional</sup> <a name="networkMonitoringProviderIdInput" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.networkMonitoringProviderIdInput"></a>

```java
public java.lang.String getNetworkMonitoringProviderIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `providerTypeInput`<sup>Optional</sup> <a name="providerTypeInput" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.providerTypeInput"></a>

```java
public java.lang.String getProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkManagementNetworkMonitoringProviderTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts">GoogleNetworkManagementNetworkMonitoringProviderTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `networkMonitoringProviderId`<sup>Required</sup> <a name="networkMonitoringProviderId" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.networkMonitoringProviderId"></a>

```java
public java.lang.String getNetworkMonitoringProviderId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkManagementNetworkMonitoringProviderConfig <a name="GoogleNetworkManagementNetworkMonitoringProviderConfig" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_network_monitoring_provider.GoogleNetworkManagementNetworkMonitoringProviderConfig;

GoogleNetworkManagementNetworkMonitoringProviderConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .networkMonitoringProviderId(java.lang.String)
    .providerType(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkManagementNetworkMonitoringProviderTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the Network Monitoring Provider. Currently only 'global' is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.networkMonitoringProviderId">networkMonitoringProviderId</a></code> | <code>java.lang.String</code> | The ID to use for the Network Monitoring Provider. This will become the last component of the provider's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.providerType">providerType</a></code> | <code>java.lang.String</code> | The type of the Network Monitoring Provider. Currently only 'EXTERNAL' is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The deletion policy for the Network Monitoring Provider. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#id GoogleNetworkManagementNetworkMonitoringProvider#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#project GoogleNetworkManagementNetworkMonitoringProvider#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts">GoogleNetworkManagementNetworkMonitoringProviderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the Network Monitoring Provider. Currently only 'global' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#location GoogleNetworkManagementNetworkMonitoringProvider#location}

---

##### `networkMonitoringProviderId`<sup>Required</sup> <a name="networkMonitoringProviderId" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.networkMonitoringProviderId"></a>

```java
public java.lang.String getNetworkMonitoringProviderId();
```

- *Type:* java.lang.String

The ID to use for the Network Monitoring Provider. This will become the last component of the provider's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#network_monitoring_provider_id GoogleNetworkManagementNetworkMonitoringProvider#network_monitoring_provider_id}

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

The type of the Network Monitoring Provider. Currently only 'EXTERNAL' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#provider_type GoogleNetworkManagementNetworkMonitoringProvider#provider_type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

The deletion policy for the Network Monitoring Provider.

Setting 'deletion_policy = "FORCE"' forces the deletion of all nested resources
(MonitoringPoints, NetworkPaths, WebPaths) belonging to this provider on deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#deletion_policy GoogleNetworkManagementNetworkMonitoringProvider#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#id GoogleNetworkManagementNetworkMonitoringProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#project GoogleNetworkManagementNetworkMonitoringProvider#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderConfig.property.timeouts"></a>

```java
public GoogleNetworkManagementNetworkMonitoringProviderTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts">GoogleNetworkManagementNetworkMonitoringProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#timeouts GoogleNetworkManagementNetworkMonitoringProvider#timeouts}

---

### GoogleNetworkManagementNetworkMonitoringProviderTimeouts <a name="GoogleNetworkManagementNetworkMonitoringProviderTimeouts" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_network_monitoring_provider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts;

GoogleNetworkManagementNetworkMonitoringProviderTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#create GoogleNetworkManagementNetworkMonitoringProvider#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#delete GoogleNetworkManagementNetworkMonitoringProvider#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#update GoogleNetworkManagementNetworkMonitoringProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#create GoogleNetworkManagementNetworkMonitoringProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#delete GoogleNetworkManagementNetworkMonitoringProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_management_network_monitoring_provider#update GoogleNetworkManagementNetworkMonitoringProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference <a name="GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_network_monitoring_provider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference;

new GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts">GoogleNetworkManagementNetworkMonitoringProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkManagementNetworkMonitoringProviderTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkManagementNetworkMonitoringProvider.GoogleNetworkManagementNetworkMonitoringProviderTimeouts">GoogleNetworkManagementNetworkMonitoringProviderTimeouts</a>

---



