# `googleCesToolset` Submodule <a name="`googleCesToolset` Submodule" id="@cdktn/provider-google-beta.googleCesToolset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesToolset <a name="GoogleCesToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset google_ces_toolset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolset(Construct Scope, string Id, GoogleCesToolsetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig">GoogleCesToolsetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig">GoogleCesToolsetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset">PutMcpToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset">PutOpenApiToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetExecutionType">ResetExecutionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetMcpToolset">ResetMcpToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetOpenApiToolset">ResetOpenApiToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMcpToolset` <a name="PutMcpToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset"></a>

```csharp
private void PutMcpToolset(GoogleCesToolsetMcpToolset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a>

---

##### `PutOpenApiToolset` <a name="PutOpenApiToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset"></a>

```csharp
private void PutOpenApiToolset(GoogleCesToolsetOpenApiToolset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCesToolsetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetExecutionType` <a name="ResetExecutionType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetExecutionType"></a>

```csharp
private void ResetExecutionType()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMcpToolset` <a name="ResetMcpToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetMcpToolset"></a>

```csharp
private void ResetMcpToolset()
```

##### `ResetOpenApiToolset` <a name="ResetOpenApiToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetOpenApiToolset"></a>

```csharp
private void ResetOpenApiToolset()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesToolset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesToolset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesToolset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesToolset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesToolset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleCesToolset resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCesToolset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCesToolset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesToolset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.mcpToolset">McpToolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference">GoogleCesToolsetMcpToolsetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.openApiToolset">OpenApiToolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference">GoogleCesToolsetOpenApiToolsetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference">GoogleCesToolsetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.appInput">AppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.executionTypeInput">ExecutionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.mcpToolsetInput">McpToolsetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.openApiToolsetInput">OpenApiToolsetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.toolsetIdInput">ToolsetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.app">App</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.executionType">ExecutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.toolsetId">ToolsetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `McpToolset`<sup>Required</sup> <a name="McpToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.mcpToolset"></a>

```csharp
public GoogleCesToolsetMcpToolsetOutputReference McpToolset { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference">GoogleCesToolsetMcpToolsetOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpenApiToolset`<sup>Required</sup> <a name="OpenApiToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.openApiToolset"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetOutputReference OpenApiToolset { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference">GoogleCesToolsetOpenApiToolsetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.timeouts"></a>

```csharp
public GoogleCesToolsetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference">GoogleCesToolsetTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.appInput"></a>

```csharp
public string AppInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExecutionTypeInput`<sup>Optional</sup> <a name="ExecutionTypeInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.executionTypeInput"></a>

```csharp
public string ExecutionTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `McpToolsetInput`<sup>Optional</sup> <a name="McpToolsetInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.mcpToolsetInput"></a>

```csharp
public GoogleCesToolsetMcpToolset McpToolsetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a>

---

##### `OpenApiToolsetInput`<sup>Optional</sup> <a name="OpenApiToolsetInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.openApiToolsetInput"></a>

```csharp
public GoogleCesToolsetOpenApiToolset OpenApiToolsetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleCesToolsetTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a>

---

##### `ToolsetIdInput`<sup>Optional</sup> <a name="ToolsetIdInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.toolsetIdInput"></a>

```csharp
public string ToolsetIdInput { get; }
```

- *Type:* string

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.app"></a>

```csharp
public string App { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExecutionType`<sup>Required</sup> <a name="ExecutionType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.executionType"></a>

```csharp
public string ExecutionType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ToolsetId`<sup>Required</sup> <a name="ToolsetId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.toolsetId"></a>

```csharp
public string ToolsetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesToolsetConfig <a name="GoogleCesToolsetConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string App,
    string Location,
    string ToolsetId,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    string ExecutionType = null,
    string Id = null,
    GoogleCesToolsetMcpToolset McpToolset = null,
    GoogleCesToolsetOpenApiToolset OpenApiToolset = null,
    string Project = null,
    GoogleCesToolsetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.app">App</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.toolsetId">ToolsetId</a></code> | <code>string</code> | The ID to use for the toolset, which will become the final component of the toolset's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.description">Description</a></code> | <code>string</code> | The description of the toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the toolset. Must be unique within the same app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.executionType">ExecutionType</a></code> | <code>string</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#id GoogleCesToolset#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.mcpToolset">McpToolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a></code> | mcp_toolset block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.openApiToolset">OpenApiToolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a></code> | open_api_toolset block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#project GoogleCesToolset#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.app"></a>

```csharp
public string App { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#app GoogleCesToolset#app}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#location GoogleCesToolset#location}

---

##### `ToolsetId`<sup>Required</sup> <a name="ToolsetId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.toolsetId"></a>

```csharp
public string ToolsetId { get; set; }
```

- *Type:* string

The ID to use for the toolset, which will become the final component of the toolset's resource name.

If not provided, a unique ID will be
automatically assigned for the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#toolset_id GoogleCesToolset#toolset_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#deletion_policy GoogleCesToolset#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#description GoogleCesToolset#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the toolset. Must be unique within the same app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}

---

##### `ExecutionType`<sup>Optional</sup> <a name="ExecutionType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.executionType"></a>

```csharp
public string ExecutionType { get; set; }
```

- *Type:* string

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#execution_type GoogleCesToolset#execution_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#id GoogleCesToolset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `McpToolset`<sup>Optional</sup> <a name="McpToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.mcpToolset"></a>

```csharp
public GoogleCesToolsetMcpToolset McpToolset { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a>

mcp_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#mcp_toolset GoogleCesToolset#mcp_toolset}

---

##### `OpenApiToolset`<sup>Optional</sup> <a name="OpenApiToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.openApiToolset"></a>

```csharp
public GoogleCesToolsetOpenApiToolset OpenApiToolset { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a>

open_api_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#open_api_toolset GoogleCesToolset#open_api_toolset}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#project GoogleCesToolset#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.timeouts"></a>

```csharp
public GoogleCesToolsetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#timeouts GoogleCesToolset#timeouts}

---

### GoogleCesToolsetMcpToolset <a name="GoogleCesToolsetMcpToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolset {
    string ServerAddress,
    GoogleCesToolsetMcpToolsetApiAuthentication ApiAuthentication = null,
    System.Collections.Generic.IDictionary<string, string> CustomHeaders = null,
    GoogleCesToolsetMcpToolsetServiceDirectoryConfig ServiceDirectoryConfig = null,
    GoogleCesToolsetMcpToolsetTlsConfig TlsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.serverAddress">ServerAddress</a></code> | <code>string</code> | The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.apiAuthentication">ApiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.customHeaders">CustomHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The custom headers to send in the request to the MCP server. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a></code> | tls_config block. |

---

##### `ServerAddress`<sup>Required</sup> <a name="ServerAddress" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.serverAddress"></a>

```csharp
public string ServerAddress { get; set; }
```

- *Type:* string

The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#server_address GoogleCesToolset#server_address}

---

##### `ApiAuthentication`<sup>Optional</sup> <a name="ApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.apiAuthentication"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthentication ApiAuthentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#api_authentication GoogleCesToolset#api_authentication}

---

##### `CustomHeaders`<sup>Optional</sup> <a name="CustomHeaders" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.customHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The custom headers to send in the request to the MCP server.

The values
must be in the format '$context.variables.<name_of_variable>' and can be
set in the session variables. See
https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection
for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#custom_headers GoogleCesToolset#custom_headers}

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.serviceDirectoryConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetServiceDirectoryConfig ServiceDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#service_directory_config GoogleCesToolset#service_directory_config}

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.tlsConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetTlsConfig TlsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#tls_config GoogleCesToolset#tls_config}

---

### GoogleCesToolsetMcpToolsetApiAuthentication <a name="GoogleCesToolsetMcpToolsetApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetApiAuthentication {
    GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig ApiKeyConfig = null,
    GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig BearerTokenConfig = null,
    GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig OauthConfig = null,
    GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig ServiceAccountAuthConfig = null,
    GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig ServiceAgentIdTokenAuthConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.serviceAccountAuthConfig">ServiceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig">ServiceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | service_agent_id_token_auth_config block. |

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.apiKeyConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig ApiKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#api_key_config GoogleCesToolset#api_key_config}

---

##### `BearerTokenConfig`<sup>Optional</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.bearerTokenConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig BearerTokenConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#bearer_token_config GoogleCesToolset#bearer_token_config}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.oauthConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig OauthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#oauth_config GoogleCesToolset#oauth_config}

---

##### `ServiceAccountAuthConfig`<sup>Optional</sup> <a name="ServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.serviceAccountAuthConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig ServiceAccountAuthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#service_account_auth_config GoogleCesToolset#service_account_auth_config}

---

##### `ServiceAgentIdTokenAuthConfig`<sup>Optional</sup> <a name="ServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig ServiceAgentIdTokenAuthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#service_agent_id_token_auth_config GoogleCesToolset#service_agent_id_token_auth_config}

---

### GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig {
    string ApiKeySecretVersion,
    string KeyName,
    string RequestLocation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.keyName">KeyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.requestLocation">RequestLocation</a></code> | <code>string</code> | Key location in the request. |

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```csharp
public string ApiKeySecretVersion { get; set; }
```

- *Type:* string

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#api_key_secret_version GoogleCesToolset#api_key_secret_version}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#key_name GoogleCesToolset#key_name}

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```csharp
public string RequestLocation { get; set; }
```

- *Type:* string

Key location in the request.

For API key auth on MCP toolsets,
the API key can only be sent in the request header.
Possible values:
HEADER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#request_location GoogleCesToolset#request_location}

---

### GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig {
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.property.token">Token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}. |

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}.

---

### GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig {
    string ClientId,
    string ClientSecretVersion,
    string OauthGrantType,
    string TokenEndpoint,
    string[] Scopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientSecretVersion">ClientSecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.oauthGrantType">OauthGrantType</a></code> | <code>string</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#client_id GoogleCesToolset#client_id}

---

##### `ClientSecretVersion`<sup>Required</sup> <a name="ClientSecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```csharp
public string ClientSecretVersion { get; set; }
```

- *Type:* string

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#client_secret_version GoogleCesToolset#client_secret_version}

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```csharp
public string OauthGrantType { get; set; }
```

- *Type:* string

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#oauth_grant_type GoogleCesToolset#oauth_grant_type}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; set; }
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#token_endpoint GoogleCesToolset#token_endpoint}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

### GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig {
    string ServiceAccount,
    string[] Scopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#service_account GoogleCesToolset#service_account}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

### GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig {

};
```


### GoogleCesToolsetMcpToolsetServiceDirectoryConfig <a name="GoogleCesToolsetMcpToolsetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetServiceDirectoryConfig {
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig.property.service">Service</a></code> | <code>string</code> | The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#service GoogleCesToolset#service}

---

### GoogleCesToolsetMcpToolsetTlsConfig <a name="GoogleCesToolsetMcpToolsetTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetTlsConfig {
    IResolvable|GoogleCesToolsetMcpToolsetTlsConfigCaCerts[] CaCerts
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig.property.caCerts">CaCerts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]</code> | ca_certs block. |

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig.property.caCerts"></a>

```csharp
public IResolvable|GoogleCesToolsetMcpToolsetTlsConfigCaCerts[] CaCerts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#ca_certs GoogleCesToolset#ca_certs}

---

### GoogleCesToolsetMcpToolsetTlsConfigCaCerts <a name="GoogleCesToolsetMcpToolsetTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetTlsConfigCaCerts {
    string Cert,
    string DisplayName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.property.cert">Cert</a></code> | <code>string</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.property.displayName">DisplayName</a></code> | <code>string</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.property.cert"></a>

```csharp
public string Cert { get; set; }
```

- *Type:* string

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, CES will use Google's default trust
store to verify certificates. N.B. Make sure the HTTPS server
certificates are signed with "subject alt name". For instance a
certificate can be self-signed using the following command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#cert GoogleCesToolset#cert}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}

---

### GoogleCesToolsetOpenApiToolset <a name="GoogleCesToolsetOpenApiToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolset {
    string OpenApiSchema,
    GoogleCesToolsetOpenApiToolsetApiAuthentication ApiAuthentication = null,
    bool|IResolvable IgnoreUnknownFields = null,
    GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig ServiceDirectoryConfig = null,
    GoogleCesToolsetOpenApiToolsetTlsConfig TlsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.openApiSchema">OpenApiSchema</a></code> | <code>string</code> | The OpenAPI schema of the toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.apiAuthentication">ApiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.ignoreUnknownFields">IgnoreUnknownFields</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a></code> | tls_config block. |

---

##### `OpenApiSchema`<sup>Required</sup> <a name="OpenApiSchema" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.openApiSchema"></a>

```csharp
public string OpenApiSchema { get; set; }
```

- *Type:* string

The OpenAPI schema of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#open_api_schema GoogleCesToolset#open_api_schema}

---

##### `ApiAuthentication`<sup>Optional</sup> <a name="ApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.apiAuthentication"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthentication ApiAuthentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#api_authentication GoogleCesToolset#api_authentication}

---

##### `IgnoreUnknownFields`<sup>Optional</sup> <a name="IgnoreUnknownFields" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.ignoreUnknownFields"></a>

```csharp
public bool|IResolvable IgnoreUnknownFields { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#ignore_unknown_fields GoogleCesToolset#ignore_unknown_fields}

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.serviceDirectoryConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig ServiceDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#service_directory_config GoogleCesToolset#service_directory_config}

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.tlsConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetTlsConfig TlsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#tls_config GoogleCesToolset#tls_config}

---

### GoogleCesToolsetOpenApiToolsetApiAuthentication <a name="GoogleCesToolsetOpenApiToolsetApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetApiAuthentication {
    GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig ApiKeyConfig = null,
    GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig BearerTokenConfig = null,
    GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig OauthConfig = null,
    GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig ServiceAccountAuthConfig = null,
    GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig ServiceAgentIdTokenAuthConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.serviceAccountAuthConfig">ServiceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig">ServiceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | service_agent_id_token_auth_config block. |

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.apiKeyConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig ApiKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#api_key_config GoogleCesToolset#api_key_config}

---

##### `BearerTokenConfig`<sup>Optional</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.bearerTokenConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig BearerTokenConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#bearer_token_config GoogleCesToolset#bearer_token_config}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.oauthConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig OauthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#oauth_config GoogleCesToolset#oauth_config}

---

##### `ServiceAccountAuthConfig`<sup>Optional</sup> <a name="ServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.serviceAccountAuthConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig ServiceAccountAuthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#service_account_auth_config GoogleCesToolset#service_account_auth_config}

---

##### `ServiceAgentIdTokenAuthConfig`<sup>Optional</sup> <a name="ServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig ServiceAgentIdTokenAuthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#service_agent_id_token_auth_config GoogleCesToolset#service_agent_id_token_auth_config}

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig {
    string ApiKeySecretVersion,
    string KeyName,
    string RequestLocation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.keyName">KeyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.requestLocation">RequestLocation</a></code> | <code>string</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```csharp
public string ApiKeySecretVersion { get; set; }
```

- *Type:* string

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#api_key_secret_version GoogleCesToolset#api_key_secret_version}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#key_name GoogleCesToolset#key_name}

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```csharp
public string RequestLocation { get; set; }
```

- *Type:* string

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#request_location GoogleCesToolset#request_location}

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig {
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.property.token">Token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}. |

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}.

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig {
    string ClientId,
    string ClientSecretVersion,
    string OauthGrantType,
    string TokenEndpoint,
    string[] Scopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientSecretVersion">ClientSecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.oauthGrantType">OauthGrantType</a></code> | <code>string</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#client_id GoogleCesToolset#client_id}

---

##### `ClientSecretVersion`<sup>Required</sup> <a name="ClientSecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```csharp
public string ClientSecretVersion { get; set; }
```

- *Type:* string

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#client_secret_version GoogleCesToolset#client_secret_version}

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```csharp
public string OauthGrantType { get; set; }
```

- *Type:* string

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#oauth_grant_type GoogleCesToolset#oauth_grant_type}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; set; }
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#token_endpoint GoogleCesToolset#token_endpoint}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig {
    string ServiceAccount,
    string[] Scopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#service_account GoogleCesToolset#service_account}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig {

};
```


### GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig <a name="GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig {
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig.property.service">Service</a></code> | <code>string</code> | The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#service GoogleCesToolset#service}

---

### GoogleCesToolsetOpenApiToolsetTlsConfig <a name="GoogleCesToolsetOpenApiToolsetTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetTlsConfig {
    IResolvable|GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts[] CaCerts
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig.property.caCerts">CaCerts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]</code> | ca_certs block. |

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig.property.caCerts"></a>

```csharp
public IResolvable|GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts[] CaCerts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#ca_certs GoogleCesToolset#ca_certs}

---

### GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts <a name="GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts {
    string Cert,
    string DisplayName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.property.cert">Cert</a></code> | <code>string</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.property.displayName">DisplayName</a></code> | <code>string</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.property.cert"></a>

```csharp
public string Cert { get; set; }
```

- *Type:* string

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, CES will use Google's default trust
store to verify certificates. N.B. Make sure the HTTPS server
certificates are signed with "subject alt name". For instance a
certificate can be self-signed using the following command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#cert GoogleCesToolset#cert}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}

---

### GoogleCesToolsetTimeouts <a name="GoogleCesToolsetTimeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#create GoogleCesToolset#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#delete GoogleCesToolset#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#update GoogleCesToolset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#create GoogleCesToolset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#delete GoogleCesToolset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_toolset#update GoogleCesToolset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">ApiKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">RequestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">RequestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeySecretVersionInput`<sup>Optional</sup> <a name="ApiKeySecretVersionInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```csharp
public string ApiKeySecretVersionInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `RequestLocationInput`<sup>Optional</sup> <a name="RequestLocationInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```csharp
public string RequestLocationInput { get; }
```

- *Type:* string

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```csharp
public string ApiKeySecretVersion { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```csharp
public string RequestLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```csharp
private void ResetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">ClientSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">OauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">ClientSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">OauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretVersionInput`<sup>Optional</sup> <a name="ClientSecretVersionInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```csharp
public string ClientSecretVersionInput { get; }
```

- *Type:* string

---

##### `OauthGrantTypeInput`<sup>Optional</sup> <a name="OauthGrantTypeInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```csharp
public string OauthGrantTypeInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```csharp
public string TokenEndpointInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretVersion`<sup>Required</sup> <a name="ClientSecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```csharp
public string ClientSecretVersion { get; }
```

- *Type:* string

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```csharp
public string OauthGrantType { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig">PutBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig">PutServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig">PutServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetBearerTokenConfig">ResetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig">ResetServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig">ResetServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig"></a>

```csharp
private void PutApiKeyConfig(GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---

##### `PutBearerTokenConfig` <a name="PutBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```csharp
private void PutBearerTokenConfig(GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig"></a>

```csharp
private void PutOauthConfig(GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---

##### `PutServiceAccountAuthConfig` <a name="PutServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```csharp
private void PutServiceAccountAuthConfig(GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `PutServiceAgentIdTokenAuthConfig` <a name="PutServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig"></a>

```csharp
private void PutServiceAgentIdTokenAuthConfig(GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```csharp
private void ResetApiKeyConfig()
```

##### `ResetBearerTokenConfig` <a name="ResetBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```csharp
private void ResetBearerTokenConfig()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetOauthConfig"></a>

```csharp
private void ResetOauthConfig()
```

##### `ResetServiceAccountAuthConfig` <a name="ResetServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```csharp
private void ResetServiceAccountAuthConfig()
```

##### `ResetServiceAgentIdTokenAuthConfig` <a name="ResetServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig"></a>

```csharp
private void ResetServiceAgentIdTokenAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig">ServiceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">ServiceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput">BearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">ServiceAccountAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput">ServiceAgentIdTokenAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference ApiKeyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `BearerTokenConfig`<sup>Required</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference BearerTokenConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference OauthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference</a>

---

##### `ServiceAccountAuthConfig`<sup>Required</sup> <a name="ServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference ServiceAccountAuthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `ServiceAgentIdTokenAuthConfig`<sup>Required</sup> <a name="ServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference ServiceAgentIdTokenAuthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig ApiKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---

##### `BearerTokenConfigInput`<sup>Optional</sup> <a name="BearerTokenConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig BearerTokenConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig OauthConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---

##### `ServiceAccountAuthConfigInput`<sup>Optional</sup> <a name="ServiceAccountAuthConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig ServiceAccountAuthConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `ServiceAgentIdTokenAuthConfigInput`<sup>Optional</sup> <a name="ServiceAgentIdTokenAuthConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig ServiceAgentIdTokenAuthConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### GoogleCesToolsetMcpToolsetOutputReference <a name="GoogleCesToolsetMcpToolsetOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication">PutApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetApiAuthentication">ResetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetCustomHeaders">ResetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiAuthentication` <a name="PutApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication"></a>

```csharp
private void PutApiAuthentication(GoogleCesToolsetMcpToolsetApiAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig"></a>

```csharp
private void PutServiceDirectoryConfig(GoogleCesToolsetMcpToolsetServiceDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putTlsConfig"></a>

```csharp
private void PutTlsConfig(GoogleCesToolsetMcpToolsetTlsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a>

---

##### `ResetApiAuthentication` <a name="ResetApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetApiAuthentication"></a>

```csharp
private void ResetApiAuthentication()
```

##### `ResetCustomHeaders` <a name="ResetCustomHeaders" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetCustomHeaders"></a>

```csharp
private void ResetCustomHeaders()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetServiceDirectoryConfig"></a>

```csharp
private void ResetServiceDirectoryConfig()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetTlsConfig"></a>

```csharp
private void ResetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.apiAuthentication">ApiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference">GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference">GoogleCesToolsetMcpToolsetTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.apiAuthenticationInput">ApiAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.customHeadersInput">CustomHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serverAddressInput">ServerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.customHeaders">CustomHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serverAddress">ServerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.apiAuthentication"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference ApiAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference</a>

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference ServiceDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference">GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.tlsConfig"></a>

```csharp
public GoogleCesToolsetMcpToolsetTlsConfigOutputReference TlsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference">GoogleCesToolsetMcpToolsetTlsConfigOutputReference</a>

---

##### `ApiAuthenticationInput`<sup>Optional</sup> <a name="ApiAuthenticationInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.apiAuthenticationInput"></a>

```csharp
public GoogleCesToolsetMcpToolsetApiAuthentication ApiAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a>

---

##### `CustomHeadersInput`<sup>Optional</sup> <a name="CustomHeadersInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.customHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServerAddressInput`<sup>Optional</sup> <a name="ServerAddressInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serverAddressInput"></a>

```csharp
public string ServerAddressInput { get; }
```

- *Type:* string

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfigInput"></a>

```csharp
public GoogleCesToolsetMcpToolsetServiceDirectoryConfig ServiceDirectoryConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a>

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.tlsConfigInput"></a>

```csharp
public GoogleCesToolsetMcpToolsetTlsConfig TlsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a>

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.customHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServerAddress`<sup>Required</sup> <a name="ServerAddress" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serverAddress"></a>

```csharp
public string ServerAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetMcpToolset InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a>

---


### GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference <a name="GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetMcpToolsetServiceDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a>

---


### GoogleCesToolsetMcpToolsetTlsConfigCaCertsList <a name="GoogleCesToolsetMcpToolsetTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetTlsConfigCaCertsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.get"></a>

```csharp
private GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesToolsetMcpToolsetTlsConfigCaCerts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]

---


### GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference <a name="GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.certInput">CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.certInput"></a>

```csharp
public string CertInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesToolsetMcpToolsetTlsConfigCaCerts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>

---


### GoogleCesToolsetMcpToolsetTlsConfigOutputReference <a name="GoogleCesToolsetMcpToolsetTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetMcpToolsetTlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts">PutCaCerts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaCerts` <a name="PutCaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts"></a>

```csharp
private void PutCaCerts(IResolvable|GoogleCesToolsetMcpToolsetTlsConfigCaCerts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.caCerts">CaCerts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList">GoogleCesToolsetMcpToolsetTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.caCertsInput">CaCertsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.caCerts"></a>

```csharp
public GoogleCesToolsetMcpToolsetTlsConfigCaCertsList CaCerts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList">GoogleCesToolsetMcpToolsetTlsConfigCaCertsList</a>

---

##### `CaCertsInput`<sup>Optional</sup> <a name="CaCertsInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.caCertsInput"></a>

```csharp
public IResolvable|GoogleCesToolsetMcpToolsetTlsConfigCaCerts[] CaCertsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetMcpToolsetTlsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">ApiKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">RequestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">RequestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeySecretVersionInput`<sup>Optional</sup> <a name="ApiKeySecretVersionInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```csharp
public string ApiKeySecretVersionInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `RequestLocationInput`<sup>Optional</sup> <a name="RequestLocationInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```csharp
public string RequestLocationInput { get; }
```

- *Type:* string

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```csharp
public string ApiKeySecretVersion { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```csharp
public string RequestLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```csharp
private void ResetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">ClientSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">OauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">ClientSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">OauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretVersionInput`<sup>Optional</sup> <a name="ClientSecretVersionInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```csharp
public string ClientSecretVersionInput { get; }
```

- *Type:* string

---

##### `OauthGrantTypeInput`<sup>Optional</sup> <a name="OauthGrantTypeInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```csharp
public string OauthGrantTypeInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```csharp
public string TokenEndpointInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretVersion`<sup>Required</sup> <a name="ClientSecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```csharp
public string ClientSecretVersion { get; }
```

- *Type:* string

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```csharp
public string OauthGrantType { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig">PutBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig">PutServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig">PutServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetBearerTokenConfig">ResetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig">ResetServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig">ResetServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig"></a>

```csharp
private void PutApiKeyConfig(GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---

##### `PutBearerTokenConfig` <a name="PutBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```csharp
private void PutBearerTokenConfig(GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig"></a>

```csharp
private void PutOauthConfig(GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---

##### `PutServiceAccountAuthConfig` <a name="PutServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```csharp
private void PutServiceAccountAuthConfig(GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `PutServiceAgentIdTokenAuthConfig` <a name="PutServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig"></a>

```csharp
private void PutServiceAgentIdTokenAuthConfig(GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```csharp
private void ResetApiKeyConfig()
```

##### `ResetBearerTokenConfig` <a name="ResetBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```csharp
private void ResetBearerTokenConfig()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetOauthConfig"></a>

```csharp
private void ResetOauthConfig()
```

##### `ResetServiceAccountAuthConfig` <a name="ResetServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```csharp
private void ResetServiceAccountAuthConfig()
```

##### `ResetServiceAgentIdTokenAuthConfig` <a name="ResetServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig"></a>

```csharp
private void ResetServiceAgentIdTokenAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig">ServiceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">ServiceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput">BearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">ServiceAccountAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput">ServiceAgentIdTokenAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference ApiKeyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `BearerTokenConfig`<sup>Required</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference BearerTokenConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference OauthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference</a>

---

##### `ServiceAccountAuthConfig`<sup>Required</sup> <a name="ServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference ServiceAccountAuthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `ServiceAgentIdTokenAuthConfig`<sup>Required</sup> <a name="ServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference ServiceAgentIdTokenAuthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig ApiKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---

##### `BearerTokenConfigInput`<sup>Optional</sup> <a name="BearerTokenConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig BearerTokenConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig OauthConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---

##### `ServiceAccountAuthConfigInput`<sup>Optional</sup> <a name="ServiceAccountAuthConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig ServiceAccountAuthConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `ServiceAgentIdTokenAuthConfigInput`<sup>Optional</sup> <a name="ServiceAgentIdTokenAuthConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig ServiceAgentIdTokenAuthConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### GoogleCesToolsetOpenApiToolsetOutputReference <a name="GoogleCesToolsetOpenApiToolsetOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication">PutApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetApiAuthentication">ResetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetIgnoreUnknownFields">ResetIgnoreUnknownFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiAuthentication` <a name="PutApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication"></a>

```csharp
private void PutApiAuthentication(GoogleCesToolsetOpenApiToolsetApiAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig"></a>

```csharp
private void PutServiceDirectoryConfig(GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putTlsConfig"></a>

```csharp
private void PutTlsConfig(GoogleCesToolsetOpenApiToolsetTlsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a>

---

##### `ResetApiAuthentication` <a name="ResetApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetApiAuthentication"></a>

```csharp
private void ResetApiAuthentication()
```

##### `ResetIgnoreUnknownFields` <a name="ResetIgnoreUnknownFields" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetIgnoreUnknownFields"></a>

```csharp
private void ResetIgnoreUnknownFields()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetServiceDirectoryConfig"></a>

```csharp
private void ResetServiceDirectoryConfig()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetTlsConfig"></a>

```csharp
private void ResetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.apiAuthentication">ApiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference">GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.apiAuthenticationInput">ApiAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFieldsInput">IgnoreUnknownFieldsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.openApiSchemaInput">OpenApiSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFields">IgnoreUnknownFields</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.openApiSchema">OpenApiSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.apiAuthentication"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference ApiAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference</a>

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference ServiceDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.tlsConfig"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference TlsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference">GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `ApiAuthenticationInput`<sup>Optional</sup> <a name="ApiAuthenticationInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.apiAuthenticationInput"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetApiAuthentication ApiAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a>

---

##### `IgnoreUnknownFieldsInput`<sup>Optional</sup> <a name="IgnoreUnknownFieldsInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFieldsInput"></a>

```csharp
public bool|IResolvable IgnoreUnknownFieldsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OpenApiSchemaInput`<sup>Optional</sup> <a name="OpenApiSchemaInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.openApiSchemaInput"></a>

```csharp
public string OpenApiSchemaInput { get; }
```

- *Type:* string

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfigInput"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig ServiceDirectoryConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.tlsConfigInput"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetTlsConfig TlsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a>

---

##### `IgnoreUnknownFields`<sup>Required</sup> <a name="IgnoreUnknownFields" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFields"></a>

```csharp
public bool|IResolvable IgnoreUnknownFields { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OpenApiSchema`<sup>Required</sup> <a name="OpenApiSchema" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.openApiSchema"></a>

```csharp
public string OpenApiSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetOpenApiToolset InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a>

---


### GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---


### GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList <a name="GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.get"></a>

```csharp
private GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]

---


### GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference <a name="GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.certInput">CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.certInput"></a>

```csharp
public string CertInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>

---


### GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts">PutCaCerts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaCerts` <a name="PutCaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts"></a>

```csharp
private void PutCaCerts(IResolvable|GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCerts">CaCerts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList">GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCertsInput">CaCertsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCerts"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList CaCerts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList">GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList</a>

---

##### `CaCertsInput`<sup>Optional</sup> <a name="CaCertsInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCertsInput"></a>

```csharp
public IResolvable|GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts[] CaCertsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesToolsetOpenApiToolsetTlsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a>

---


### GoogleCesToolsetTimeoutsOutputReference <a name="GoogleCesToolsetTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesToolsetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesToolsetTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a>

---



