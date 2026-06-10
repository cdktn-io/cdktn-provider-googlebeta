# `googleDiscoveryEngineAclConfig` Submodule <a name="`googleDiscoveryEngineAclConfig` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineAclConfig <a name="GoogleDiscoveryEngineAclConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config google_discovery_engine_acl_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_acl_config.GoogleDiscoveryEngineAclConfig;

GoogleDiscoveryEngineAclConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .idpConfig(GoogleDiscoveryEngineAclConfigIdpConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleDiscoveryEngineAclConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#id GoogleDiscoveryEngineAclConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#project GoogleDiscoveryEngineAclConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#location GoogleDiscoveryEngineAclConfig#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#id GoogleDiscoveryEngineAclConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpConfig`<sup>Optional</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#idp_config GoogleDiscoveryEngineAclConfig#idp_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#project GoogleDiscoveryEngineAclConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#timeouts GoogleDiscoveryEngineAclConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetIdpConfig">resetIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putIdpConfig"></a>

```java
public void putIdpConfig(GoogleDiscoveryEngineAclConfigIdpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleDiscoveryEngineAclConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetId"></a>

```java
public void resetId()
```

##### `resetIdpConfig` <a name="resetIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetIdpConfig"></a>

```java
public void resetIdpConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineAclConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_acl_config.GoogleDiscoveryEngineAclConfig;

GoogleDiscoveryEngineAclConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_acl_config.GoogleDiscoveryEngineAclConfig;

GoogleDiscoveryEngineAclConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_acl_config.GoogleDiscoveryEngineAclConfig;

GoogleDiscoveryEngineAclConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_acl_config.GoogleDiscoveryEngineAclConfig;

GoogleDiscoveryEngineAclConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDiscoveryEngineAclConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineAclConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDiscoveryEngineAclConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDiscoveryEngineAclConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineAclConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference">GoogleDiscoveryEngineAclConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference">GoogleDiscoveryEngineAclConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idpConfig"></a>

```java
public GoogleDiscoveryEngineAclConfigIdpConfigOutputReference getIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference">GoogleDiscoveryEngineAclConfigIdpConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.timeouts"></a>

```java
public GoogleDiscoveryEngineAclConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference">GoogleDiscoveryEngineAclConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idpConfigInput"></a>

```java
public GoogleDiscoveryEngineAclConfigIdpConfig getIdpConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDiscoveryEngineAclConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineAclConfigConfig <a name="GoogleDiscoveryEngineAclConfigConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_acl_config.GoogleDiscoveryEngineAclConfigConfig;

GoogleDiscoveryEngineAclConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .idpConfig(GoogleDiscoveryEngineAclConfigIdpConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleDiscoveryEngineAclConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#id GoogleDiscoveryEngineAclConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#project GoogleDiscoveryEngineAclConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#location GoogleDiscoveryEngineAclConfig#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#id GoogleDiscoveryEngineAclConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpConfig`<sup>Optional</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.idpConfig"></a>

```java
public GoogleDiscoveryEngineAclConfigIdpConfig getIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#idp_config GoogleDiscoveryEngineAclConfig#idp_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#project GoogleDiscoveryEngineAclConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.timeouts"></a>

```java
public GoogleDiscoveryEngineAclConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#timeouts GoogleDiscoveryEngineAclConfig#timeouts}

---

### GoogleDiscoveryEngineAclConfigIdpConfig <a name="GoogleDiscoveryEngineAclConfigIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_acl_config.GoogleDiscoveryEngineAclConfigIdpConfig;

GoogleDiscoveryEngineAclConfigIdpConfig.builder()
//  .externalIdpConfig(GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig)
//  .idpType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.property.externalIdpConfig">externalIdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | external_idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.property.idpType">idpType</a></code> | <code>java.lang.String</code> | Identity provider type. Possible values: ["GSUITE", "THIRD_PARTY"]. |

---

##### `externalIdpConfig`<sup>Optional</sup> <a name="externalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.property.externalIdpConfig"></a>

```java
public GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig getExternalIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

external_idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#external_idp_config GoogleDiscoveryEngineAclConfig#external_idp_config}

---

##### `idpType`<sup>Optional</sup> <a name="idpType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.property.idpType"></a>

```java
public java.lang.String getIdpType();
```

- *Type:* java.lang.String

Identity provider type. Possible values: ["GSUITE", "THIRD_PARTY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#idp_type GoogleDiscoveryEngineAclConfig#idp_type}

---

### GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig <a name="GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_acl_config.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig;

GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig.builder()
//  .workforcePoolName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig.property.workforcePoolName">workforcePoolName</a></code> | <code>java.lang.String</code> | Workforce pool name: "locations/global/workforcePools/pool_id". |

---

##### `workforcePoolName`<sup>Optional</sup> <a name="workforcePoolName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig.property.workforcePoolName"></a>

```java
public java.lang.String getWorkforcePoolName();
```

- *Type:* java.lang.String

Workforce pool name: "locations/global/workforcePools/pool_id".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#workforce_pool_name GoogleDiscoveryEngineAclConfig#workforce_pool_name}

---

### GoogleDiscoveryEngineAclConfigTimeouts <a name="GoogleDiscoveryEngineAclConfigTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_acl_config.GoogleDiscoveryEngineAclConfigTimeouts;

GoogleDiscoveryEngineAclConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#create GoogleDiscoveryEngineAclConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#delete GoogleDiscoveryEngineAclConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#update GoogleDiscoveryEngineAclConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#create GoogleDiscoveryEngineAclConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#delete GoogleDiscoveryEngineAclConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_acl_config#update GoogleDiscoveryEngineAclConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference <a name="GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_acl_config.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference;

new GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resetWorkforcePoolName">resetWorkforcePoolName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkforcePoolName` <a name="resetWorkforcePoolName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resetWorkforcePoolName"></a>

```java
public void resetWorkforcePoolName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolNameInput">workforcePoolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolName">workforcePoolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workforcePoolNameInput`<sup>Optional</sup> <a name="workforcePoolNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolNameInput"></a>

```java
public java.lang.String getWorkforcePoolNameInput();
```

- *Type:* java.lang.String

---

##### `workforcePoolName`<sup>Required</sup> <a name="workforcePoolName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolName"></a>

```java
public java.lang.String getWorkforcePoolName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---


### GoogleDiscoveryEngineAclConfigIdpConfigOutputReference <a name="GoogleDiscoveryEngineAclConfigIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_acl_config.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference;

new GoogleDiscoveryEngineAclConfigIdpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig">putExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resetExternalIdpConfig">resetExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resetIdpType">resetIdpType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalIdpConfig` <a name="putExternalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig"></a>

```java
public void putExternalIdpConfig(GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---

##### `resetExternalIdpConfig` <a name="resetExternalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resetExternalIdpConfig"></a>

```java
public void resetExternalIdpConfig()
```

##### `resetIdpType` <a name="resetIdpType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resetIdpType"></a>

```java
public void resetIdpType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfig">externalIdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfigInput">externalIdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.idpTypeInput">idpTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.idpType">idpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIdpConfig`<sup>Required</sup> <a name="externalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfig"></a>

```java
public GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference getExternalIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference</a>

---

##### `externalIdpConfigInput`<sup>Optional</sup> <a name="externalIdpConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfigInput"></a>

```java
public GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig getExternalIdpConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---

##### `idpTypeInput`<sup>Optional</sup> <a name="idpTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.idpTypeInput"></a>

```java
public java.lang.String getIdpTypeInput();
```

- *Type:* java.lang.String

---

##### `idpType`<sup>Required</sup> <a name="idpType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.idpType"></a>

```java
public java.lang.String getIdpType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineAclConfigIdpConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

---


### GoogleDiscoveryEngineAclConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineAclConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_acl_config.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference;

new GoogleDiscoveryEngineAclConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDiscoveryEngineAclConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

---



