# `googleResourceManagerBoundary` Submodule <a name="`googleResourceManagerBoundary` Submodule" id="@cdktn/provider-google-beta.googleResourceManagerBoundary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleResourceManagerBoundary <a name="GoogleResourceManagerBoundary" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary google_resource_manager_boundary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_resource_manager_boundary.GoogleResourceManagerBoundary;

GoogleResourceManagerBoundary.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .boundaryId(java.lang.String)
    .parent(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .resourceFilter(GoogleResourceManagerBoundaryResourceFilter)
//  .timeouts(GoogleResourceManagerBoundaryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.boundaryId">boundaryId</a></code> | <code>java.lang.String</code> | The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of the Boundary. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#id GoogleResourceManagerBoundary#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.resourceFilter">resourceFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a></code> | resource_filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `boundaryId`<sup>Required</sup> <a name="boundaryId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.boundaryId"></a>

- *Type:* java.lang.String

The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name.

Must be unique within the parent.
Must be 6 to 30 lowercase ASCII letters, digits, or hyphens, must start
with a letter, and may not end with a hyphen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#boundary_id GoogleResourceManagerBoundary#boundary_id}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#parent GoogleResourceManagerBoundary#parent}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#deletion_policy GoogleResourceManagerBoundary#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable display name of the Boundary.

When present it must be
between 4 and 30 characters. Allowed characters are lowercase and
uppercase letters, numbers, hyphen, single-quote, double-quote, space,
and exclamation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#display_name GoogleResourceManagerBoundary#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#id GoogleResourceManagerBoundary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceFilter`<sup>Optional</sup> <a name="resourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.resourceFilter"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

resource_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#resource_filter GoogleResourceManagerBoundary#resource_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#timeouts GoogleResourceManagerBoundary#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putResourceFilter">putResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetResourceFilter">resetResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceFilter` <a name="putResourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putResourceFilter"></a>

```java
public void putResourceFilter(GoogleResourceManagerBoundaryResourceFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putResourceFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putTimeouts"></a>

```java
public void putTimeouts(GoogleResourceManagerBoundaryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetId"></a>

```java
public void resetId()
```

##### `resetResourceFilter` <a name="resetResourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetResourceFilter"></a>

```java
public void resetResourceFilter()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleResourceManagerBoundary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_resource_manager_boundary.GoogleResourceManagerBoundary;

GoogleResourceManagerBoundary.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_resource_manager_boundary.GoogleResourceManagerBoundary;

GoogleResourceManagerBoundary.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_resource_manager_boundary.GoogleResourceManagerBoundary;

GoogleResourceManagerBoundary.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_resource_manager_boundary.GoogleResourceManagerBoundary;

GoogleResourceManagerBoundary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleResourceManagerBoundary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleResourceManagerBoundary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleResourceManagerBoundary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleResourceManagerBoundary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleResourceManagerBoundary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.managementProject">managementProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.resourceFilter">resourceFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference">GoogleResourceManagerBoundaryResourceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference">GoogleResourceManagerBoundaryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.boundaryIdInput">boundaryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.resourceFilterInput">resourceFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.boundaryId">boundaryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `managementProject`<sup>Required</sup> <a name="managementProject" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.managementProject"></a>

```java
public java.lang.String getManagementProject();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceFilter`<sup>Required</sup> <a name="resourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.resourceFilter"></a>

```java
public GoogleResourceManagerBoundaryResourceFilterOutputReference getResourceFilter();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference">GoogleResourceManagerBoundaryResourceFilterOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.timeouts"></a>

```java
public GoogleResourceManagerBoundaryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference">GoogleResourceManagerBoundaryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `boundaryIdInput`<sup>Optional</sup> <a name="boundaryIdInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.boundaryIdInput"></a>

```java
public java.lang.String getBoundaryIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `resourceFilterInput`<sup>Optional</sup> <a name="resourceFilterInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.resourceFilterInput"></a>

```java
public GoogleResourceManagerBoundaryResourceFilter getResourceFilterInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.timeoutsInput"></a>

```java
public IResolvable|GoogleResourceManagerBoundaryTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

---

##### `boundaryId`<sup>Required</sup> <a name="boundaryId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.boundaryId"></a>

```java
public java.lang.String getBoundaryId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleResourceManagerBoundaryConfig <a name="GoogleResourceManagerBoundaryConfig" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_resource_manager_boundary.GoogleResourceManagerBoundaryConfig;

GoogleResourceManagerBoundaryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .boundaryId(java.lang.String)
    .parent(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .resourceFilter(GoogleResourceManagerBoundaryResourceFilter)
//  .timeouts(GoogleResourceManagerBoundaryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.boundaryId">boundaryId</a></code> | <code>java.lang.String</code> | The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of the Boundary. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#id GoogleResourceManagerBoundary#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.resourceFilter">resourceFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a></code> | resource_filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `boundaryId`<sup>Required</sup> <a name="boundaryId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.boundaryId"></a>

```java
public java.lang.String getBoundaryId();
```

- *Type:* java.lang.String

The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name.

Must be unique within the parent.
Must be 6 to 30 lowercase ASCII letters, digits, or hyphens, must start
with a letter, and may not end with a hyphen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#boundary_id GoogleResourceManagerBoundary#boundary_id}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#parent GoogleResourceManagerBoundary#parent}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#deletion_policy GoogleResourceManagerBoundary#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable display name of the Boundary.

When present it must be
between 4 and 30 characters. Allowed characters are lowercase and
uppercase letters, numbers, hyphen, single-quote, double-quote, space,
and exclamation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#display_name GoogleResourceManagerBoundary#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#id GoogleResourceManagerBoundary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceFilter`<sup>Optional</sup> <a name="resourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.resourceFilter"></a>

```java
public GoogleResourceManagerBoundaryResourceFilter getResourceFilter();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

resource_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#resource_filter GoogleResourceManagerBoundary#resource_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.timeouts"></a>

```java
public GoogleResourceManagerBoundaryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#timeouts GoogleResourceManagerBoundary#timeouts}

---

### GoogleResourceManagerBoundaryResourceFilter <a name="GoogleResourceManagerBoundaryResourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_resource_manager_boundary.GoogleResourceManagerBoundaryResourceFilter;

GoogleResourceManagerBoundaryResourceFilter.builder()
    .tagFilter(GoogleResourceManagerBoundaryResourceFilterTagFilter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter.property.tagFilter">tagFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a></code> | tag_filter block. |

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter.property.tagFilter"></a>

```java
public GoogleResourceManagerBoundaryResourceFilterTagFilter getTagFilter();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a>

tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#tag_filter GoogleResourceManagerBoundary#tag_filter}

---

### GoogleResourceManagerBoundaryResourceFilterTagFilter <a name="GoogleResourceManagerBoundaryResourceFilterTagFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_resource_manager_boundary.GoogleResourceManagerBoundaryResourceFilterTagFilter;

GoogleResourceManagerBoundaryResourceFilterTagFilter.builder()
    .tagKey(java.lang.String)
    .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | The namespaced name of the tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | The allowed short name of the tag value, for example 'production'. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

The namespaced name of the tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#tag_key GoogleResourceManagerBoundary#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

The allowed short name of the tag value, for example 'production'.

A project matches this tag filter if its effective tag value for
the given 'tagKey' matches this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#tag_value GoogleResourceManagerBoundary#tag_value}

---

### GoogleResourceManagerBoundaryTimeouts <a name="GoogleResourceManagerBoundaryTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_resource_manager_boundary.GoogleResourceManagerBoundaryTimeouts;

GoogleResourceManagerBoundaryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#create GoogleResourceManagerBoundary#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#delete GoogleResourceManagerBoundary#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#update GoogleResourceManagerBoundary#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#create GoogleResourceManagerBoundary#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#delete GoogleResourceManagerBoundary#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#update GoogleResourceManagerBoundary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleResourceManagerBoundaryResourceFilterOutputReference <a name="GoogleResourceManagerBoundaryResourceFilterOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_resource_manager_boundary.GoogleResourceManagerBoundaryResourceFilterOutputReference;

new GoogleResourceManagerBoundaryResourceFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.putTagFilter">putTagFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilter` <a name="putTagFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.putTagFilter"></a>

```java
public void putTagFilter(GoogleResourceManagerBoundaryResourceFilterTagFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.putTagFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.tagFilter">tagFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference">GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.tagFilterInput">tagFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.tagFilter"></a>

```java
public GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference getTagFilter();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference">GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference</a>

---

##### `tagFilterInput`<sup>Optional</sup> <a name="tagFilterInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.tagFilterInput"></a>

```java
public GoogleResourceManagerBoundaryResourceFilterTagFilter getTagFilterInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.internalValue"></a>

```java
public GoogleResourceManagerBoundaryResourceFilter getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

---


### GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference <a name="GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_resource_manager_boundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference;

new GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.internalValue"></a>

```java
public GoogleResourceManagerBoundaryResourceFilterTagFilter getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a>

---


### GoogleResourceManagerBoundaryTimeoutsOutputReference <a name="GoogleResourceManagerBoundaryTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_resource_manager_boundary.GoogleResourceManagerBoundaryTimeoutsOutputReference;

new GoogleResourceManagerBoundaryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleResourceManagerBoundaryTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

---



