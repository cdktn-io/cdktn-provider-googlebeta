# `googleChronicleCaseStageDefinition` Submodule <a name="`googleChronicleCaseStageDefinition` Submodule" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleCaseStageDefinition <a name="GoogleChronicleCaseStageDefinition" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition google_chronicle_case_stage_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleCaseStageDefinition(Construct Scope, string Id, GoogleChronicleCaseStageDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig">GoogleChronicleCaseStageDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig">GoogleChronicleCaseStageDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleChronicleCaseStageDefinitionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts">GoogleChronicleCaseStageDefinitionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleCaseStageDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleCaseStageDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleCaseStageDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleCaseStageDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleCaseStageDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleChronicleCaseStageDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleCaseStageDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleCaseStageDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleCaseStageDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.caseStageDefinitionId">CaseStageDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference">GoogleChronicleCaseStageDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts">GoogleChronicleCaseStageDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaseStageDefinitionId`<sup>Required</sup> <a name="CaseStageDefinitionId" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.caseStageDefinitionId"></a>

```csharp
public string CaseStageDefinitionId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.timeouts"></a>

```csharp
public GoogleChronicleCaseStageDefinitionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference">GoogleChronicleCaseStageDefinitionTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleChronicleCaseStageDefinitionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts">GoogleChronicleCaseStageDefinitionTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleCaseStageDefinitionConfig <a name="GoogleChronicleCaseStageDefinitionConfig" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleCaseStageDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Instance,
    string Location,
    double Order,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    GoogleChronicleCaseStageDefinitionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the stage. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.instance">Instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.order">Order</a></code> | <code>double</code> | Defines the case stage order in the lifetime of a case. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#id GoogleChronicleCaseStageDefinition#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#project GoogleChronicleCaseStageDefinition#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts">GoogleChronicleCaseStageDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the stage.

The display name must be unique within the instance. The display name must not contain special characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#display_name GoogleChronicleCaseStageDefinition#display_name}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#instance GoogleChronicleCaseStageDefinition#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#location GoogleChronicleCaseStageDefinition#location}

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Defines the case stage order in the lifetime of a case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#order GoogleChronicleCaseStageDefinition#order}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#deletion_policy GoogleChronicleCaseStageDefinition#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#id GoogleChronicleCaseStageDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#project GoogleChronicleCaseStageDefinition#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionConfig.property.timeouts"></a>

```csharp
public GoogleChronicleCaseStageDefinitionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts">GoogleChronicleCaseStageDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#timeouts GoogleChronicleCaseStageDefinition#timeouts}

---

### GoogleChronicleCaseStageDefinitionTimeouts <a name="GoogleChronicleCaseStageDefinitionTimeouts" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleCaseStageDefinitionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#create GoogleChronicleCaseStageDefinition#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#delete GoogleChronicleCaseStageDefinition#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#update GoogleChronicleCaseStageDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#create GoogleChronicleCaseStageDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#delete GoogleChronicleCaseStageDefinition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_stage_definition#update GoogleChronicleCaseStageDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleCaseStageDefinitionTimeoutsOutputReference <a name="GoogleChronicleCaseStageDefinitionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleCaseStageDefinitionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts">GoogleChronicleCaseStageDefinitionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleCaseStageDefinitionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleCaseStageDefinition.GoogleChronicleCaseStageDefinitionTimeouts">GoogleChronicleCaseStageDefinitionTimeouts</a>

---



