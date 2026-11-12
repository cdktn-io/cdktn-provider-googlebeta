# `googleDataLineageOpenLineageJob` Submodule <a name="`googleDataLineageOpenLineageJob` Submodule" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataLineageOpenLineageJob <a name="GoogleDataLineageOpenLineageJob" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job google_data_lineage_open_lineage_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJob(Construct Scope, string Id, GoogleDataLineageOpenLineageJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig">GoogleDataLineageOpenLineageJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig">GoogleDataLineageOpenLineageJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInput` <a name="PutInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput"></a>

```csharp
private void PutInput(IResolvable|GoogleDataLineageOpenLineageJobInput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]

---

##### `PutOutput` <a name="PutOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput"></a>

```csharp
private void PutOutput(IResolvable|GoogleDataLineageOpenLineageJobOutput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataLineageOpenLineageJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOutput"></a>

```csharp
private void ResetOutput()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataLineageOpenLineageJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataLineageOpenLineageJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataLineageOpenLineageJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataLineageOpenLineageJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataLineageOpenLineageJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataLineageOpenLineageJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataLineageOpenLineageJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.input">Input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList">GoogleDataLineageOpenLineageJobInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.output">Output</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList">GoogleDataLineageOpenLineageJobOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.process">Process</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.run">Run</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference">GoogleDataLineageOpenLineageJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.inputInput">InputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.outputInput">OutputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.input"></a>

```csharp
public GoogleDataLineageOpenLineageJobInputList Input { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList">GoogleDataLineageOpenLineageJobInputList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.output"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputList Output { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList">GoogleDataLineageOpenLineageJobOutputList</a>

---

##### `Process`<sup>Required</sup> <a name="Process" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.process"></a>

```csharp
public string Process { get; }
```

- *Type:* string

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.run"></a>

```csharp
public string Run { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeouts"></a>

```csharp
public GoogleDataLineageOpenLineageJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference">GoogleDataLineageOpenLineageJobTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.inputInput"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobInput[] InputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.outputInput"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutput[] OutputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataLineageOpenLineageJobConfig <a name="GoogleDataLineageOpenLineageJobConfig" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Namespace,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    IResolvable|GoogleDataLineageOpenLineageJobInput[] Input = null,
    IResolvable|GoogleDataLineageOpenLineageJobOutput[] Output = null,
    GoogleDataLineageOpenLineageJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.name">Name</a></code> | <code>string</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.description">Description</a></code> | <code>string</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.input">Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]</code> | input block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.output">Output</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]</code> | output block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#deletion_policy GoogleDataLineageOpenLineageJob#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#description GoogleDataLineageOpenLineageJob#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.input"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobInput[] Input { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.output"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutput[] Output { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#output GoogleDataLineageOpenLineageJob#output}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.timeouts"></a>

```csharp
public GoogleDataLineageOpenLineageJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#timeouts GoogleDataLineageOpenLineageJob#timeouts}

---

### GoogleDataLineageOpenLineageJobInput <a name="GoogleDataLineageOpenLineageJobInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobInput {
    string Name,
    string Namespace,
    GoogleDataLineageOpenLineageJobInputCatalog Catalog = null,
    IResolvable|GoogleDataLineageOpenLineageJobInputSymlink[] Symlink = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.name">Name</a></code> | <code>string</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.symlink">Symlink</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]</code> | symlink block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.catalog"></a>

```csharp
public GoogleDataLineageOpenLineageJobInputCatalog Catalog { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#catalog GoogleDataLineageOpenLineageJob#catalog}

---

##### `Symlink`<sup>Optional</sup> <a name="Symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.symlink"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobInputSymlink[] Symlink { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#symlink GoogleDataLineageOpenLineageJob#symlink}

---

### GoogleDataLineageOpenLineageJobInputCatalog <a name="GoogleDataLineageOpenLineageJobInputCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobInputCatalog {
    string Framework,
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.framework">Framework</a></code> | <code>string</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.name">Name</a></code> | <code>string</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.type">Type</a></code> | <code>string</code> | Catalog entity type. |

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.framework"></a>

```csharp
public string Framework { get; set; }
```

- *Type:* string

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobInputSymlink <a name="GoogleDataLineageOpenLineageJobInputSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobInputSymlink {
    string Name,
    string Namespace,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.name">Name</a></code> | <code>string</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.type">Type</a></code> | <code>string</code> | Type of the symlink target. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobOutput <a name="GoogleDataLineageOpenLineageJobOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutput {
    string Name,
    string Namespace,
    GoogleDataLineageOpenLineageJobOutputCatalog Catalog = null,
    GoogleDataLineageOpenLineageJobOutputColumnLineage ColumnLineage = null,
    IResolvable|GoogleDataLineageOpenLineageJobOutputSymlink[] Symlink = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.name">Name</a></code> | <code>string</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.columnLineage">ColumnLineage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | column_lineage block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.symlink">Symlink</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]</code> | symlink block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.catalog"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputCatalog Catalog { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#catalog GoogleDataLineageOpenLineageJob#catalog}

---

##### `ColumnLineage`<sup>Optional</sup> <a name="ColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.columnLineage"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputColumnLineage ColumnLineage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

column_lineage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#column_lineage GoogleDataLineageOpenLineageJob#column_lineage}

---

##### `Symlink`<sup>Optional</sup> <a name="Symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.symlink"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputSymlink[] Symlink { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#symlink GoogleDataLineageOpenLineageJob#symlink}

---

### GoogleDataLineageOpenLineageJobOutputCatalog <a name="GoogleDataLineageOpenLineageJobOutputCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputCatalog {
    string Framework,
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.framework">Framework</a></code> | <code>string</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.name">Name</a></code> | <code>string</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.type">Type</a></code> | <code>string</code> | Catalog entity type. |

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.framework"></a>

```csharp
public string Framework { get; set; }
```

- *Type:* string

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineage <a name="GoogleDataLineageOpenLineageJobOutputColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineage {
    IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageField[] Field,
    IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput[] DatasetInput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.field">Field</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]</code> | field block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.datasetInput">DatasetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]</code> | dataset_input block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.field"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageField[] Field { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.datasetInput"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput[] DatasetInput { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

dataset_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#dataset_input GoogleDataLineageOpenLineageJob#dataset_input}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput {
    string Field,
    string Name,
    string Namespace,
    IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] Transformation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field">Field</a></code> | <code>string</code> | Source field name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name">Name</a></code> | <code>string</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation">Transformation</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]</code> | transformation block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] Transformation { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#transformation GoogleDataLineageOpenLineageJob#transformation}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation {
    string Type,
    string Subtype = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type">Type</a></code> | <code>string</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype">Subtype</a></code> | <code>string</code> | Transformation subtype. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype"></a>

```csharp
public string Subtype { get; set; }
```

- *Type:* string

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#subtype GoogleDataLineageOpenLineageJob#subtype}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageField <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageField" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageField {
    IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput[] Input,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.input">Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]</code> | input block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.name">Name</a></code> | <code>string</code> | Output field name. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.input"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput[] Input { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Output field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput {
    string Field,
    string Name,
    string Namespace,
    IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] Transformation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field">Field</a></code> | <code>string</code> | Source field name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name">Name</a></code> | <code>string</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation">Transformation</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]</code> | transformation block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] Transformation { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#transformation GoogleDataLineageOpenLineageJob#transformation}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation {
    string Type,
    string Subtype = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type">Type</a></code> | <code>string</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype">Subtype</a></code> | <code>string</code> | Transformation subtype. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype"></a>

```csharp
public string Subtype { get; set; }
```

- *Type:* string

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#subtype GoogleDataLineageOpenLineageJob#subtype}

---

### GoogleDataLineageOpenLineageJobOutputSymlink <a name="GoogleDataLineageOpenLineageJobOutputSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputSymlink {
    string Name,
    string Namespace,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.name">Name</a></code> | <code>string</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.type">Type</a></code> | <code>string</code> | Type of the symlink target. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobTimeouts <a name="GoogleDataLineageOpenLineageJobTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#create GoogleDataLineageOpenLineageJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#delete GoogleDataLineageOpenLineageJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#update GoogleDataLineageOpenLineageJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#create GoogleDataLineageOpenLineageJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#delete GoogleDataLineageOpenLineageJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#update GoogleDataLineageOpenLineageJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataLineageOpenLineageJobInputCatalogOutputReference <a name="GoogleDataLineageOpenLineageJobInputCatalogOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobInputCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.framework">Framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput"></a>

```csharp
public string FrameworkInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.framework"></a>

```csharp
public string Framework { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue"></a>

```csharp
public GoogleDataLineageOpenLineageJobInputCatalog InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---


### GoogleDataLineageOpenLineageJobInputList <a name="GoogleDataLineageOpenLineageJobInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get"></a>

```csharp
private GoogleDataLineageOpenLineageJobInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobInput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>[]

---


### GoogleDataLineageOpenLineageJobInputOutputReference <a name="GoogleDataLineageOpenLineageJobInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog">PutCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink">PutSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetSymlink">ResetSymlink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalog` <a name="PutCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog"></a>

```csharp
private void PutCatalog(GoogleDataLineageOpenLineageJobInputCatalog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---

##### `PutSymlink` <a name="PutSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink"></a>

```csharp
private void PutSymlink(IResolvable|GoogleDataLineageOpenLineageJobInputSymlink[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetSymlink` <a name="ResetSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetSymlink"></a>

```csharp
private void ResetSymlink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference">GoogleDataLineageOpenLineageJobInputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlink">Symlink</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList">GoogleDataLineageOpenLineageJobInputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalogInput">CatalogInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlinkInput">SymlinkInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalog"></a>

```csharp
public GoogleDataLineageOpenLineageJobInputCatalogOutputReference Catalog { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference">GoogleDataLineageOpenLineageJobInputCatalogOutputReference</a>

---

##### `Symlink`<sup>Required</sup> <a name="Symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlink"></a>

```csharp
public GoogleDataLineageOpenLineageJobInputSymlinkList Symlink { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList">GoogleDataLineageOpenLineageJobInputSymlinkList</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalogInput"></a>

```csharp
public GoogleDataLineageOpenLineageJobInputCatalog CatalogInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SymlinkInput`<sup>Optional</sup> <a name="SymlinkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlinkInput"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobInputSymlink[] SymlinkInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>

---


### GoogleDataLineageOpenLineageJobInputSymlinkList <a name="GoogleDataLineageOpenLineageJobInputSymlinkList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobInputSymlinkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get"></a>

```csharp
private GoogleDataLineageOpenLineageJobInputSymlinkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobInputSymlink[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>[]

---


### GoogleDataLineageOpenLineageJobInputSymlinkOutputReference <a name="GoogleDataLineageOpenLineageJobInputSymlinkOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobInputSymlinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobInputSymlink InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>

---


### GoogleDataLineageOpenLineageJobOutputCatalogOutputReference <a name="GoogleDataLineageOpenLineageJobOutputCatalogOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.framework">Framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput"></a>

```csharp
public string FrameworkInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.framework"></a>

```csharp
public string Framework { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputCatalog InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get"></a>

```csharp
private GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransformation` <a name="PutTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation"></a>

```csharp
private void PutTransformation(IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

---

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation"></a>

```csharp
private void ResetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation">Transformation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput">TransformationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList Transformation { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] TransformationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get"></a>

```csharp
private GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype">ResetSubtype</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype"></a>

```csharp
private void ResetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput">SubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype">Subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput"></a>

```csharp
public string SubtypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype"></a>

```csharp
public string Subtype { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get"></a>

```csharp
private GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransformation` <a name="PutTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation"></a>

```csharp
private void PutTransformation(IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

---

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation"></a>

```csharp
private void ResetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation">Transformation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput">TransformationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList Transformation { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] TransformationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get"></a>

```csharp
private GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype">ResetSubtype</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype"></a>

```csharp
private void ResetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput">SubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype">Subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput"></a>

```csharp
public string SubtypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype"></a>

```csharp
public string Subtype { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get"></a>

```csharp
private GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageField[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput">PutInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInput` <a name="PutInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput"></a>

```csharp
private void PutInput(IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input">Input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput">InputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList Input { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList</a>

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput[] InputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageField InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput">PutDatasetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField">PutField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput">ResetDatasetInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetInput` <a name="PutDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput"></a>

```csharp
private void PutDatasetInput(IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

---

##### `PutField` <a name="PutField" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField"></a>

```csharp
private void PutField(IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageField[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]

---

##### `ResetDatasetInput` <a name="ResetDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput"></a>

```csharp
private void ResetDatasetInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field">Field</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput">DatasetInputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput">FieldInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Required</sup> <a name="DatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList DatasetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a>

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList Field { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList</a>

---

##### `DatasetInputInput`<sup>Optional</sup> <a name="DatasetInputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput[] DatasetInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputColumnLineageField[] FieldInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputColumnLineage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---


### GoogleDataLineageOpenLineageJobOutputList <a name="GoogleDataLineageOpenLineageJobOutputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get"></a>

```csharp
private GoogleDataLineageOpenLineageJobOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>[]

---


### GoogleDataLineageOpenLineageJobOutputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog">PutCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage">PutColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink">PutSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetColumnLineage">ResetColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetSymlink">ResetSymlink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalog` <a name="PutCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog"></a>

```csharp
private void PutCatalog(GoogleDataLineageOpenLineageJobOutputCatalog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---

##### `PutColumnLineage` <a name="PutColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage"></a>

```csharp
private void PutColumnLineage(GoogleDataLineageOpenLineageJobOutputColumnLineage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `PutSymlink` <a name="PutSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink"></a>

```csharp
private void PutSymlink(IResolvable|GoogleDataLineageOpenLineageJobOutputSymlink[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetColumnLineage` <a name="ResetColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetColumnLineage"></a>

```csharp
private void ResetColumnLineage()
```

##### `ResetSymlink` <a name="ResetSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetSymlink"></a>

```csharp
private void ResetSymlink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference">GoogleDataLineageOpenLineageJobOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineage">ColumnLineage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference">GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlink">Symlink</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList">GoogleDataLineageOpenLineageJobOutputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalogInput">CatalogInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput">ColumnLineageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlinkInput">SymlinkInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalog"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputCatalogOutputReference Catalog { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference">GoogleDataLineageOpenLineageJobOutputCatalogOutputReference</a>

---

##### `ColumnLineage`<sup>Required</sup> <a name="ColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineage"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference ColumnLineage { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference">GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference</a>

---

##### `Symlink`<sup>Required</sup> <a name="Symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlink"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputSymlinkList Symlink { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList">GoogleDataLineageOpenLineageJobOutputSymlinkList</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalogInput"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputCatalog CatalogInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---

##### `ColumnLineageInput`<sup>Optional</sup> <a name="ColumnLineageInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput"></a>

```csharp
public GoogleDataLineageOpenLineageJobOutputColumnLineage ColumnLineageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SymlinkInput`<sup>Optional</sup> <a name="SymlinkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlinkInput"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputSymlink[] SymlinkInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>

---


### GoogleDataLineageOpenLineageJobOutputSymlinkList <a name="GoogleDataLineageOpenLineageJobOutputSymlinkList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputSymlinkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get"></a>

```csharp
private GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputSymlink[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>[]

---


### GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference <a name="GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobOutputSymlink InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>

---


### GoogleDataLineageOpenLineageJobTimeoutsOutputReference <a name="GoogleDataLineageOpenLineageJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataLineageOpenLineageJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataLineageOpenLineageJobTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

---



