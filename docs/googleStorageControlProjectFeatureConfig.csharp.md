# `googleStorageControlProjectFeatureConfig` Submodule <a name="`googleStorageControlProjectFeatureConfig` Submodule" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageControlProjectFeatureConfig <a name="GoogleStorageControlProjectFeatureConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config google_storage_control_project_feature_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfig(Construct Scope, string Id, GoogleStorageControlProjectFeatureConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig">GoogleStorageControlProjectFeatureConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig">GoogleStorageControlProjectFeatureConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig">PutAutoAnnotateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoAnnotateConfig` <a name="PutAutoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig"></a>

```csharp
private void PutAutoAnnotateConfig(GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putFilter"></a>

```csharp
private void PutFilter(GoogleStorageControlProjectFeatureConfigFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleStorageControlProjectFeatureConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleStorageControlProjectFeatureConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleStorageControlProjectFeatureConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleStorageControlProjectFeatureConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleStorageControlProjectFeatureConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleStorageControlProjectFeatureConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleStorageControlProjectFeatureConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageControlProjectFeatureConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageControlProjectFeatureConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleStorageControlProjectFeatureConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfig">AutoAnnotateConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference">GoogleStorageControlProjectFeatureConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference">GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfigInput">AutoAnnotateConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigIdInput">FeatureConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigId">FeatureConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoAnnotateConfig`<sup>Required</sup> <a name="AutoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfig"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference AutoAnnotateConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filter"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference">GoogleStorageControlProjectFeatureConfigFilterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeouts"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference">GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AutoAnnotateConfigInput`<sup>Optional</sup> <a name="AutoAnnotateConfigInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfigInput"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig AutoAnnotateConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FeatureConfigIdInput`<sup>Optional</sup> <a name="FeatureConfigIdInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigIdInput"></a>

```csharp
public string FeatureConfigIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filterInput"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleStorageControlProjectFeatureConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FeatureConfigId`<sup>Required</sup> <a name="FeatureConfigId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigId"></a>

```csharp
public string FeatureConfigId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig {
    IResolvable|GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels[] Models,
    string ProcessingLocation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.models">Models</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]</code> | models block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.processingLocation">ProcessingLocation</a></code> | <code>string</code> | The geographic location (case-sensitive) where data is processed. Currently, only multi-region locations such as 'us', 'eu', or 'asia' are supported. |

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.models"></a>

```csharp
public IResolvable|GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels[] Models { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]

models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#models GoogleStorageControlProjectFeatureConfig#models}

---

##### `ProcessingLocation`<sup>Required</sup> <a name="ProcessingLocation" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.processingLocation"></a>

```csharp
public string ProcessingLocation { get; set; }
```

- *Type:* string

The geographic location (case-sensitive) where data is processed. Currently, only multi-region locations such as 'us', 'eu', or 'asia' are supported.

To avoid duplicate billing, configure exactly one processing location for each bucket
and model combination. If you configure multiple processing locations for the same
bucket and model across different feature configurations, a separate annotation run is
triggered in each location, and you're billed for each resulting annotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#processing_location GoogleStorageControlProjectFeatureConfig#processing_location}

---

### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.property.name">Name</a></code> | <code>string</code> | The name of the model. Supported values include 'face-detector', 'object-detector', 'label-detector', and 'content-safety'. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the model. Supported values include 'face-detector', 'object-detector', 'label-detector', and 'content-safety'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#name GoogleStorageControlProjectFeatureConfig#name}

---

### GoogleStorageControlProjectFeatureConfigConfig <a name="GoogleStorageControlProjectFeatureConfigConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig AutoAnnotateConfig,
    string FeatureConfigId,
    string DeletionPolicy = null,
    string Description = null,
    GoogleStorageControlProjectFeatureConfigFilter Filter = null,
    string Id = null,
    string Project = null,
    GoogleStorageControlProjectFeatureConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.autoAnnotateConfig">AutoAnnotateConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | auto_annotate_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.featureConfigId">FeatureConfigId</a></code> | <code>string</code> | The ID of the feature configuration, which becomes the final component of its resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.description">Description</a></code> | <code>string</code> | A description of the feature configuration. The description can be up to 256 characters long. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#id GoogleStorageControlProjectFeatureConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#project GoogleStorageControlProjectFeatureConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoAnnotateConfig`<sup>Required</sup> <a name="AutoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.autoAnnotateConfig"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig AutoAnnotateConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

auto_annotate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#auto_annotate_config GoogleStorageControlProjectFeatureConfig#auto_annotate_config}

---

##### `FeatureConfigId`<sup>Required</sup> <a name="FeatureConfigId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.featureConfigId"></a>

```csharp
public string FeatureConfigId { get; set; }
```

- *Type:* string

The ID of the feature configuration, which becomes the final component of its resource name.

The ID must be 1 to 63 characters long, start with a lowercase letter, and contain only
lowercase letters, digits, and dashes. The last character can't be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#feature_config_id GoogleStorageControlProjectFeatureConfig#feature_config_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#deletion_policy GoogleStorageControlProjectFeatureConfig#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the feature configuration. The description can be up to 256 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#description GoogleStorageControlProjectFeatureConfig#description}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.filter"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#filter GoogleStorageControlProjectFeatureConfig#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#id GoogleStorageControlProjectFeatureConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#project GoogleStorageControlProjectFeatureConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.timeouts"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#timeouts GoogleStorageControlProjectFeatureConfig#timeouts}

---

### GoogleStorageControlProjectFeatureConfigFilter <a name="GoogleStorageControlProjectFeatureConfigFilter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfigFilter {
    GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets IncludedCloudStorageBuckets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |

---

##### `IncludedCloudStorageBuckets`<sup>Required</sup> <a name="IncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter.property.includedCloudStorageBuckets"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets IncludedCloudStorageBuckets { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#included_cloud_storage_buckets GoogleStorageControlProjectFeatureConfig#included_cloud_storage_buckets}

---

### GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets <a name="GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets {
    string[] BucketIdRegexes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>string[]</code> | The names of the buckets to include. |

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```csharp
public string[] BucketIdRegexes { get; set; }
```

- *Type:* string[]

The names of the buckets to include.

For Auto Annotate, regex wildcards aren't
supported, so specify exact bucket names (for example, 'my-bucket'). Each bucket
must already exist in the feature configuration's project. Up to 1,000 buckets can
be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#bucket_id_regexes GoogleStorageControlProjectFeatureConfig#bucket_id_regexes}

---

### GoogleStorageControlProjectFeatureConfigTimeouts <a name="GoogleStorageControlProjectFeatureConfigTimeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#create GoogleStorageControlProjectFeatureConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#delete GoogleStorageControlProjectFeatureConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#update GoogleStorageControlProjectFeatureConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#create GoogleStorageControlProjectFeatureConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#delete GoogleStorageControlProjectFeatureConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#update GoogleStorageControlProjectFeatureConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get"></a>

```csharp
private GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]

---


### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>

---


### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.putModels">PutModels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModels` <a name="PutModels" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.putModels"></a>

```csharp
private void PutModels(IResolvable|GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.putModels.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.models">Models</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.modelsInput">ModelsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocationInput">ProcessingLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocation">ProcessingLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.models"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList Models { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList</a>

---

##### `ModelsInput`<sup>Optional</sup> <a name="ModelsInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.modelsInput"></a>

```csharp
public IResolvable|GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels[] ModelsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>[]

---

##### `ProcessingLocationInput`<sup>Optional</sup> <a name="ProcessingLocationInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocationInput"></a>

```csharp
public string ProcessingLocationInput { get; }
```

- *Type:* string

---

##### `ProcessingLocation`<sup>Required</sup> <a name="ProcessingLocation" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocation"></a>

```csharp
public string ProcessingLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

---


### GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">BucketIdRegexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketIdRegexesInput`<sup>Optional</sup> <a name="BucketIdRegexesInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```csharp
public string[] BucketIdRegexesInput { get; }
```

- *Type:* string[]

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```csharp
public string[] BucketIdRegexes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

---


### GoogleStorageControlProjectFeatureConfigFilterOutputReference <a name="GoogleStorageControlProjectFeatureConfigFilterOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfigFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.putIncludedCloudStorageBuckets">PutIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncludedCloudStorageBuckets` <a name="PutIncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```csharp
private void PutIncludedCloudStorageBuckets(GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBucketsInput">IncludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludedCloudStorageBuckets`<sup>Required</sup> <a name="IncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference IncludedCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `IncludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="IncludedCloudStorageBucketsInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets IncludedCloudStorageBucketsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageControlProjectFeatureConfigFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

---


### GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference <a name="GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleStorageControlProjectFeatureConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

---



