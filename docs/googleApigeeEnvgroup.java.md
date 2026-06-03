# `googleApigeeEnvgroup` Submodule <a name="`googleApigeeEnvgroup` Submodule" id="@cdktn/provider-google-beta.googleApigeeEnvgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvgroup <a name="GoogleApigeeEnvgroup" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup google_apigee_envgroup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_envgroup.GoogleApigeeEnvgroup;

GoogleApigeeEnvgroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(GoogleApigeeEnvgroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource ID of the environment group. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee environment group, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Hostnames of the environment group. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#id GoogleApigeeEnvgroup#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts">GoogleApigeeEnvgroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource ID of the environment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#name GoogleApigeeEnvgroup#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee environment group, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#org_id GoogleApigeeEnvgroup#org_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#deletion_policy GoogleApigeeEnvgroup#deletion_policy}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.hostnames"></a>

- *Type:* java.util.List<java.lang.String>

Hostnames of the environment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#hostnames GoogleApigeeEnvgroup#hostnames}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#id GoogleApigeeEnvgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts">GoogleApigeeEnvgroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#timeouts GoogleApigeeEnvgroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.resetHostnames">resetHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.putTimeouts"></a>

```java
public void putTimeouts(GoogleApigeeEnvgroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts">GoogleApigeeEnvgroupTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetHostnames` <a name="resetHostnames" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.resetHostnames"></a>

```java
public void resetHostnames()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApigeeEnvgroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_envgroup.GoogleApigeeEnvgroup;

GoogleApigeeEnvgroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_envgroup.GoogleApigeeEnvgroup;

GoogleApigeeEnvgroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_envgroup.GoogleApigeeEnvgroup;

GoogleApigeeEnvgroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_envgroup.GoogleApigeeEnvgroup;

GoogleApigeeEnvgroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApigeeEnvgroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleApigeeEnvgroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApigeeEnvgroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApigeeEnvgroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvgroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference">GoogleApigeeEnvgroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.hostnamesInput">hostnamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts">GoogleApigeeEnvgroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.timeouts"></a>

```java
public GoogleApigeeEnvgroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference">GoogleApigeeEnvgroupTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.hostnamesInput"></a>

```java
public java.util.List<java.lang.String> getHostnamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.timeoutsInput"></a>

```java
public IResolvable|GoogleApigeeEnvgroupTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts">GoogleApigeeEnvgroupTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvgroupConfig <a name="GoogleApigeeEnvgroupConfig" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_envgroup.GoogleApigeeEnvgroupConfig;

GoogleApigeeEnvgroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(GoogleApigeeEnvgroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource ID of the environment group. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee environment group, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Hostnames of the environment group. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#id GoogleApigeeEnvgroup#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts">GoogleApigeeEnvgroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource ID of the environment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#name GoogleApigeeEnvgroup#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee environment group, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#org_id GoogleApigeeEnvgroup#org_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#deletion_policy GoogleApigeeEnvgroup#deletion_policy}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

Hostnames of the environment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#hostnames GoogleApigeeEnvgroup#hostnames}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#id GoogleApigeeEnvgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupConfig.property.timeouts"></a>

```java
public GoogleApigeeEnvgroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts">GoogleApigeeEnvgroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#timeouts GoogleApigeeEnvgroup#timeouts}

---

### GoogleApigeeEnvgroupTimeouts <a name="GoogleApigeeEnvgroupTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_envgroup.GoogleApigeeEnvgroupTimeouts;

GoogleApigeeEnvgroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#create GoogleApigeeEnvgroup#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#delete GoogleApigeeEnvgroup#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#update GoogleApigeeEnvgroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#create GoogleApigeeEnvgroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#delete GoogleApigeeEnvgroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_envgroup#update GoogleApigeeEnvgroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvgroupTimeoutsOutputReference <a name="GoogleApigeeEnvgroupTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_envgroup.GoogleApigeeEnvgroupTimeoutsOutputReference;

new GoogleApigeeEnvgroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts">GoogleApigeeEnvgroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleApigeeEnvgroupTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeEnvgroup.GoogleApigeeEnvgroupTimeouts">GoogleApigeeEnvgroupTimeouts</a>

---



