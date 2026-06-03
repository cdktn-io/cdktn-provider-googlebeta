# `googleClouddeployCustomTargetType` Submodule <a name="`googleClouddeployCustomTargetType` Submodule" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployCustomTargetType <a name="GoogleClouddeployCustomTargetType" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type google_clouddeploy_custom_target_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetType(Construct Scope, string Id, GoogleClouddeployCustomTargetTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig">GoogleClouddeployCustomTargetTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig">GoogleClouddeployCustomTargetTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putCustomActions">PutCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTasks">PutTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetCustomActions">ResetCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetTasks">ResetTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomActions` <a name="PutCustomActions" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putCustomActions"></a>

```csharp
private void PutCustomActions(GoogleClouddeployCustomTargetTypeCustomActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putCustomActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a>

---

##### `PutTasks` <a name="PutTasks" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTasks"></a>

```csharp
private void PutTasks(GoogleClouddeployCustomTargetTypeTasks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTasks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleClouddeployCustomTargetTypeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetCustomActions` <a name="ResetCustomActions" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetCustomActions"></a>

```csharp
private void ResetCustomActions()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTasks` <a name="ResetTasks" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetTasks"></a>

```csharp
private void ResetTasks()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleClouddeployCustomTargetType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleClouddeployCustomTargetType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleClouddeployCustomTargetType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleClouddeployCustomTargetType.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleClouddeployCustomTargetType.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleClouddeployCustomTargetType resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleClouddeployCustomTargetType to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleClouddeployCustomTargetType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployCustomTargetType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customActions">CustomActions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customTargetTypeId">CustomTargetTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tasks">Tasks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference">GoogleClouddeployCustomTargetTypeTasksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference">GoogleClouddeployCustomTargetTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customActionsInput">CustomActionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tasksInput">TasksInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CustomActions`<sup>Required</sup> <a name="CustomActions" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customActions"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsOutputReference CustomActions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsOutputReference</a>

---

##### `CustomTargetTypeId`<sup>Required</sup> <a name="CustomTargetTypeId" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customTargetTypeId"></a>

```csharp
public string CustomTargetTypeId { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tasks"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksOutputReference Tasks { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference">GoogleClouddeployCustomTargetTypeTasksOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.timeouts"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference">GoogleClouddeployCustomTargetTypeTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomActionsInput`<sup>Optional</sup> <a name="CustomActionsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customActionsInput"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActions CustomActionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TasksInput`<sup>Optional</sup> <a name="TasksInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tasksInput"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasks TasksInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleClouddeployCustomTargetTypeTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployCustomTargetTypeConfig <a name="GoogleClouddeployCustomTargetTypeConfig" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GoogleClouddeployCustomTargetTypeCustomActions CustomActions = null,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleClouddeployCustomTargetTypeTasks Tasks = null,
    GoogleClouddeployCustomTargetTypeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.location">Location</a></code> | <code>string</code> | The location of the source. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.name">Name</a></code> | <code>string</code> | Name of the 'CustomTargetType'. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User annotations. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.customActions">CustomActions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a></code> | custom_actions block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.description">Description</a></code> | <code>string</code> | Description of the 'CustomTargetType'. Max length is 255 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#id GoogleClouddeployCustomTargetType#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels are attributes that can be set and used by both the user and by Cloud Deploy. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#project GoogleClouddeployCustomTargetType#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.tasks">Tasks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a></code> | tasks block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#location GoogleClouddeployCustomTargetType#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the 'CustomTargetType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#name GoogleClouddeployCustomTargetType#name}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User annotations.

These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#annotations GoogleClouddeployCustomTargetType#annotations}

---

##### `CustomActions`<sup>Optional</sup> <a name="CustomActions" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.customActions"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActions CustomActions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a>

custom_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#custom_actions GoogleClouddeployCustomTargetType#custom_actions}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#deletion_policy GoogleClouddeployCustomTargetType#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the 'CustomTargetType'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#description GoogleClouddeployCustomTargetType#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#id GoogleClouddeployCustomTargetType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels are attributes that can be set and used by both the user and by Cloud Deploy.

Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#labels GoogleClouddeployCustomTargetType#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#project GoogleClouddeployCustomTargetType#project}.

---

##### `Tasks`<sup>Optional</sup> <a name="Tasks" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.tasks"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasks Tasks { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a>

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#tasks GoogleClouddeployCustomTargetType#tasks}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.timeouts"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#timeouts GoogleClouddeployCustomTargetType#timeouts}

---

### GoogleClouddeployCustomTargetTypeCustomActions <a name="GoogleClouddeployCustomTargetTypeCustomActions" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeCustomActions {
    string DeployAction,
    IResolvable|GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules[] IncludeSkaffoldModules = null,
    string RenderAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.deployAction">DeployAction</a></code> | <code>string</code> | The Skaffold custom action responsible for deploy operations. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.includeSkaffoldModules">IncludeSkaffoldModules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]</code> | include_skaffold_modules block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.renderAction">RenderAction</a></code> | <code>string</code> | The Skaffold custom action responsible for render operations. |

---

##### `DeployAction`<sup>Required</sup> <a name="DeployAction" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.deployAction"></a>

```csharp
public string DeployAction { get; set; }
```

- *Type:* string

The Skaffold custom action responsible for deploy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#deploy_action GoogleClouddeployCustomTargetType#deploy_action}

---

##### `IncludeSkaffoldModules`<sup>Optional</sup> <a name="IncludeSkaffoldModules" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.includeSkaffoldModules"></a>

```csharp
public IResolvable|GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules[] IncludeSkaffoldModules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]

include_skaffold_modules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#include_skaffold_modules GoogleClouddeployCustomTargetType#include_skaffold_modules}

---

##### `RenderAction`<sup>Optional</sup> <a name="RenderAction" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.renderAction"></a>

```csharp
public string RenderAction { get; set; }
```

- *Type:* string

The Skaffold custom action responsible for render operations.

If not provided then Cloud Deploy will perform the render operations via 'skaffold render'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#render_action GoogleClouddeployCustomTargetType#render_action}

---

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules {
    string[] Configs = null,
    GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit Git = null,
    GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo GoogleCloudBuildRepo = null,
    GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage GoogleCloudStorage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.configs">Configs</a></code> | <code>string[]</code> | The Skaffold Config modules to use from the specified source. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.git">Git</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | git block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudBuildRepo">GoogleCloudBuildRepo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | google_cloud_build_repo block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudStorage">GoogleCloudStorage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | google_cloud_storage block. |

---

##### `Configs`<sup>Optional</sup> <a name="Configs" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.configs"></a>

```csharp
public string[] Configs { get; set; }
```

- *Type:* string[]

The Skaffold Config modules to use from the specified source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#configs GoogleClouddeployCustomTargetType#configs}

---

##### `Git`<sup>Optional</sup> <a name="Git" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.git"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit Git { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#git GoogleClouddeployCustomTargetType#git}

---

##### `GoogleCloudBuildRepo`<sup>Optional</sup> <a name="GoogleCloudBuildRepo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudBuildRepo"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo GoogleCloudBuildRepo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

google_cloud_build_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#google_cloud_build_repo GoogleClouddeployCustomTargetType#google_cloud_build_repo}

---

##### `GoogleCloudStorage`<sup>Optional</sup> <a name="GoogleCloudStorage" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudStorage"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage GoogleCloudStorage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

google_cloud_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#google_cloud_storage GoogleClouddeployCustomTargetType#google_cloud_storage}

---

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit {
    string Repo,
    string Path = null,
    string Ref = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.repo">Repo</a></code> | <code>string</code> | Git repository the package should be cloned from. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.path">Path</a></code> | <code>string</code> | Relative path from the repository root to the Skaffold file. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.ref">Ref</a></code> | <code>string</code> | Git ref the package should be cloned from. |

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Git repository the package should be cloned from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#repo GoogleClouddeployCustomTargetType#repo}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Relative path from the repository root to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#path GoogleClouddeployCustomTargetType#path}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.ref"></a>

```csharp
public string Ref { get; set; }
```

- *Type:* string

Git ref the package should be cloned from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#ref GoogleClouddeployCustomTargetType#ref}

---

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo {
    string Repository,
    string Path = null,
    string Ref = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.repository">Repository</a></code> | <code>string</code> | Cloud Build 2nd gen repository in the format of 'projects/<project>/locations/<location>/connections/<connection>/repositories/<repository>'. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.path">Path</a></code> | <code>string</code> | Relative path from the repository root to the Skaffold file. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.ref">Ref</a></code> | <code>string</code> | Branch or tag to use when cloning the repository. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Cloud Build 2nd gen repository in the format of 'projects/<project>/locations/<location>/connections/<connection>/repositories/<repository>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#repository GoogleClouddeployCustomTargetType#repository}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Relative path from the repository root to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#path GoogleClouddeployCustomTargetType#path}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.ref"></a>

```csharp
public string Ref { get; set; }
```

- *Type:* string

Branch or tag to use when cloning the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#ref GoogleClouddeployCustomTargetType#ref}

---

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage {
    string Source,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.source">Source</a></code> | <code>string</code> | Cloud Storage source paths to copy recursively. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.path">Path</a></code> | <code>string</code> | Relative path from the source to the Skaffold file. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Cloud Storage source paths to copy recursively.

For example, providing 'gs://my-bucket/dir/configs/*' will result in Skaffold copying all files within the 'dir/configs' directory in the bucket 'my-bucket'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#source GoogleClouddeployCustomTargetType#source}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Relative path from the source to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#path GoogleClouddeployCustomTargetType#path}

---

### GoogleClouddeployCustomTargetTypeTasks <a name="GoogleClouddeployCustomTargetTypeTasks" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeTasks {
    GoogleClouddeployCustomTargetTypeTasksDeploy Deploy,
    GoogleClouddeployCustomTargetTypeTasksRender Render = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks.property.deploy">Deploy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a></code> | deploy block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks.property.render">Render</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a></code> | render block. |

---

##### `Deploy`<sup>Required</sup> <a name="Deploy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks.property.deploy"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksDeploy Deploy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a>

deploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#deploy GoogleClouddeployCustomTargetType#deploy}

---

##### `Render`<sup>Optional</sup> <a name="Render" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks.property.render"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksRender Render { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a>

render block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#render GoogleClouddeployCustomTargetType#render}

---

### GoogleClouddeployCustomTargetTypeTasksDeploy <a name="GoogleClouddeployCustomTargetTypeTasksDeploy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeTasksDeploy {
    GoogleClouddeployCustomTargetTypeTasksDeployContainer Container = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy.property.container">Container</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a></code> | container block. |

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy.property.container"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksDeployContainer Container { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#container GoogleClouddeployCustomTargetType#container}

---

### GoogleClouddeployCustomTargetTypeTasksDeployContainer <a name="GoogleClouddeployCustomTargetTypeTasksDeployContainer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeTasksDeployContainer {
    string Image,
    string[] Args = null,
    string[] Command = null,
    System.Collections.Generic.IDictionary<string, string> Env = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.image">Image</a></code> | <code>string</code> | Image is the container image to use. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.args">Args</a></code> | <code>string[]</code> | Args is the container arguments to use. This overrides the default arguments defined in the container image. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.command">Command</a></code> | <code>string[]</code> | Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.env">Env</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables that are set in the container. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Image is the container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#image GoogleClouddeployCustomTargetType#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Args is the container arguments to use. This overrides the default arguments defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#args GoogleClouddeployCustomTargetType#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#command GoogleClouddeployCustomTargetType#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer.property.env"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Env { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables that are set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#env GoogleClouddeployCustomTargetType#env}

---

### GoogleClouddeployCustomTargetTypeTasksRender <a name="GoogleClouddeployCustomTargetTypeTasksRender" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeTasksRender {
    GoogleClouddeployCustomTargetTypeTasksRenderContainer Container = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender.property.container">Container</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a></code> | container block. |

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender.property.container"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksRenderContainer Container { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#container GoogleClouddeployCustomTargetType#container}

---

### GoogleClouddeployCustomTargetTypeTasksRenderContainer <a name="GoogleClouddeployCustomTargetTypeTasksRenderContainer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeTasksRenderContainer {
    string Image,
    string[] Args = null,
    string[] Command = null,
    System.Collections.Generic.IDictionary<string, string> Env = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.image">Image</a></code> | <code>string</code> | Image is the container image to use. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.args">Args</a></code> | <code>string[]</code> | Args is the container arguments to use. This overrides the default arguments defined in the container image. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.command">Command</a></code> | <code>string[]</code> | Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.env">Env</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables that are set in the container. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Image is the container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#image GoogleClouddeployCustomTargetType#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Args is the container arguments to use. This overrides the default arguments defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#args GoogleClouddeployCustomTargetType#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#command GoogleClouddeployCustomTargetType#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer.property.env"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Env { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables that are set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#env GoogleClouddeployCustomTargetType#env}

---

### GoogleClouddeployCustomTargetTypeTimeouts <a name="GoogleClouddeployCustomTargetTypeTimeouts" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#create GoogleClouddeployCustomTargetType#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#delete GoogleClouddeployCustomTargetType#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#update GoogleClouddeployCustomTargetType#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#create GoogleClouddeployCustomTargetType#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#delete GoogleClouddeployCustomTargetType#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_custom_target_type#update GoogleClouddeployCustomTargetType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetRef">ResetRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetRef"></a>

```csharp
private void ResetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.refInput">RefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.refInput"></a>

```csharp
public string RefInput { get; }
```

- *Type:* string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---


### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetRef">ResetRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetRef"></a>

```csharp
private void ResetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.refInput">RefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.refInput"></a>

```csharp
public string RefInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---


### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---


### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get"></a>

```csharp
private GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]

---


### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit">PutGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo">PutGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage">PutGoogleCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetConfigs">ResetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGit">ResetGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudBuildRepo">ResetGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudStorage">ResetGoogleCloudStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGit` <a name="PutGit" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit"></a>

```csharp
private void PutGit(GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---

##### `PutGoogleCloudBuildRepo` <a name="PutGoogleCloudBuildRepo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo"></a>

```csharp
private void PutGoogleCloudBuildRepo(GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---

##### `PutGoogleCloudStorage` <a name="PutGoogleCloudStorage" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage"></a>

```csharp
private void PutGoogleCloudStorage(GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---

##### `ResetConfigs` <a name="ResetConfigs" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetConfigs"></a>

```csharp
private void ResetConfigs()
```

##### `ResetGit` <a name="ResetGit" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGit"></a>

```csharp
private void ResetGit()
```

##### `ResetGoogleCloudBuildRepo` <a name="ResetGoogleCloudBuildRepo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudBuildRepo"></a>

```csharp
private void ResetGoogleCloudBuildRepo()
```

##### `ResetGoogleCloudStorage` <a name="ResetGoogleCloudStorage" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudStorage"></a>

```csharp
private void ResetGoogleCloudStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.git">Git</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepo">GoogleCloudBuildRepo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorage">GoogleCloudStorage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configsInput">ConfigsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.gitInput">GitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepoInput">GoogleCloudBuildRepoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorageInput">GoogleCloudStorageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configs">Configs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Git`<sup>Required</sup> <a name="Git" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.git"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference Git { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference</a>

---

##### `GoogleCloudBuildRepo`<sup>Required</sup> <a name="GoogleCloudBuildRepo" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepo"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference GoogleCloudBuildRepo { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference</a>

---

##### `GoogleCloudStorage`<sup>Required</sup> <a name="GoogleCloudStorage" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorage"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference GoogleCloudStorage { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference</a>

---

##### `ConfigsInput`<sup>Optional</sup> <a name="ConfigsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configsInput"></a>

```csharp
public string[] ConfigsInput { get; }
```

- *Type:* string[]

---

##### `GitInput`<sup>Optional</sup> <a name="GitInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.gitInput"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit GitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---

##### `GoogleCloudBuildRepoInput`<sup>Optional</sup> <a name="GoogleCloudBuildRepoInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepoInput"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo GoogleCloudBuildRepoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---

##### `GoogleCloudStorageInput`<sup>Optional</sup> <a name="GoogleCloudStorageInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorageInput"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage GoogleCloudStorageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---

##### `Configs`<sup>Required</sup> <a name="Configs" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configs"></a>

```csharp
public string[] Configs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>

---


### GoogleClouddeployCustomTargetTypeCustomActionsOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeCustomActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules">PutIncludeSkaffoldModules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resetIncludeSkaffoldModules">ResetIncludeSkaffoldModules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resetRenderAction">ResetRenderAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncludeSkaffoldModules` <a name="PutIncludeSkaffoldModules" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules"></a>

```csharp
private void PutIncludeSkaffoldModules(IResolvable|GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]

---

##### `ResetIncludeSkaffoldModules` <a name="ResetIncludeSkaffoldModules" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resetIncludeSkaffoldModules"></a>

```csharp
private void ResetIncludeSkaffoldModules()
```

##### `ResetRenderAction` <a name="ResetRenderAction" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resetRenderAction"></a>

```csharp
private void ResetRenderAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModules">IncludeSkaffoldModules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployActionInput">DeployActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModulesInput">IncludeSkaffoldModulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderActionInput">RenderActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployAction">DeployAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderAction">RenderAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeSkaffoldModules`<sup>Required</sup> <a name="IncludeSkaffoldModules" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModules"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList IncludeSkaffoldModules { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList</a>

---

##### `DeployActionInput`<sup>Optional</sup> <a name="DeployActionInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployActionInput"></a>

```csharp
public string DeployActionInput { get; }
```

- *Type:* string

---

##### `IncludeSkaffoldModulesInput`<sup>Optional</sup> <a name="IncludeSkaffoldModulesInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModulesInput"></a>

```csharp
public IResolvable|GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules[] IncludeSkaffoldModulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>[]

---

##### `RenderActionInput`<sup>Optional</sup> <a name="RenderActionInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderActionInput"></a>

```csharp
public string RenderActionInput { get; }
```

- *Type:* string

---

##### `DeployAction`<sup>Required</sup> <a name="DeployAction" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployAction"></a>

```csharp
public string DeployAction { get; }
```

- *Type:* string

---

##### `RenderAction`<sup>Required</sup> <a name="RenderAction" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderAction"></a>

```csharp
public string RenderAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployCustomTargetTypeCustomActions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a>

---


### GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference <a name="GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.envInput">EnvInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.env">Env</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.envInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.env"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Env { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksDeployContainer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a>

---


### GoogleClouddeployCustomTargetTypeTasksDeployOutputReference <a name="GoogleClouddeployCustomTargetTypeTasksDeployOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeTasksDeployOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainer` <a name="PutContainer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.putContainer"></a>

```csharp
private void PutContainer(GoogleClouddeployCustomTargetTypeTasksDeployContainer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.resetContainer"></a>

```csharp
private void ResetContainer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.container">Container</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference">GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.container"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference Container { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference">GoogleClouddeployCustomTargetTypeTasksDeployContainerOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.containerInput"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksDeployContainer ContainerInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployContainer">GoogleClouddeployCustomTargetTypeTasksDeployContainer</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksDeploy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a>

---


### GoogleClouddeployCustomTargetTypeTasksOutputReference <a name="GoogleClouddeployCustomTargetTypeTasksOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeTasksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.putDeploy">PutDeploy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.putRender">PutRender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.resetRender">ResetRender</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeploy` <a name="PutDeploy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.putDeploy"></a>

```csharp
private void PutDeploy(GoogleClouddeployCustomTargetTypeTasksDeploy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.putDeploy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a>

---

##### `PutRender` <a name="PutRender" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.putRender"></a>

```csharp
private void PutRender(GoogleClouddeployCustomTargetTypeTasksRender Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.putRender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a>

---

##### `ResetRender` <a name="ResetRender" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.resetRender"></a>

```csharp
private void ResetRender()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.deploy">Deploy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference">GoogleClouddeployCustomTargetTypeTasksDeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.render">Render</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference">GoogleClouddeployCustomTargetTypeTasksRenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.deployInput">DeployInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.renderInput">RenderInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Deploy`<sup>Required</sup> <a name="Deploy" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.deploy"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksDeployOutputReference Deploy { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeployOutputReference">GoogleClouddeployCustomTargetTypeTasksDeployOutputReference</a>

---

##### `Render`<sup>Required</sup> <a name="Render" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.render"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksRenderOutputReference Render { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference">GoogleClouddeployCustomTargetTypeTasksRenderOutputReference</a>

---

##### `DeployInput`<sup>Optional</sup> <a name="DeployInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.deployInput"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksDeploy DeployInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksDeploy">GoogleClouddeployCustomTargetTypeTasksDeploy</a>

---

##### `RenderInput`<sup>Optional</sup> <a name="RenderInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.renderInput"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksRender RenderInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasks">GoogleClouddeployCustomTargetTypeTasks</a>

---


### GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference <a name="GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.envInput">EnvInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.env">Env</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.envInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.env"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Env { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksRenderContainer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a>

---


### GoogleClouddeployCustomTargetTypeTasksRenderOutputReference <a name="GoogleClouddeployCustomTargetTypeTasksRenderOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeTasksRenderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainer` <a name="PutContainer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.putContainer"></a>

```csharp
private void PutContainer(GoogleClouddeployCustomTargetTypeTasksRenderContainer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.resetContainer"></a>

```csharp
private void ResetContainer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.container">Container</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference">GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.container"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference Container { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference">GoogleClouddeployCustomTargetTypeTasksRenderContainerOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.containerInput"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksRenderContainer ContainerInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderContainer">GoogleClouddeployCustomTargetTypeTasksRenderContainer</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRenderOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployCustomTargetTypeTasksRender InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTasksRender">GoogleClouddeployCustomTargetTypeTasksRender</a>

---


### GoogleClouddeployCustomTargetTypeTimeoutsOutputReference <a name="GoogleClouddeployCustomTargetTypeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleClouddeployCustomTargetTypeTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a>

---



