# `googleResourceManagerBoundaryConfig` Submodule <a name="`googleResourceManagerBoundaryConfig` Submodule" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleResourceManagerBoundaryConfigA <a name="GoogleResourceManagerBoundaryConfigA" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config google_resource_manager_boundary_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleResourceManagerBoundaryConfigA(Construct Scope, string Id, GoogleResourceManagerBoundaryConfigAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig">GoogleResourceManagerBoundaryConfigAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig">GoogleResourceManagerBoundaryConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleResourceManagerBoundaryConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleResourceManagerBoundaryConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleResourceManagerBoundaryConfigA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleResourceManagerBoundaryConfigA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleResourceManagerBoundaryConfigA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleResourceManagerBoundaryConfigA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleResourceManagerBoundaryConfigA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleResourceManagerBoundaryConfigA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleResourceManagerBoundaryConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleResourceManagerBoundaryConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference">GoogleResourceManagerBoundaryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.timeouts"></a>

```csharp
public GoogleResourceManagerBoundaryConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference">GoogleResourceManagerBoundaryConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleResourceManagerBoundaryConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleResourceManagerBoundaryConfigAConfig <a name="GoogleResourceManagerBoundaryConfigAConfig" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleResourceManagerBoundaryConfigAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    string TagKey,
    string DeletionPolicy = null,
    string Id = null,
    GoogleResourceManagerBoundaryConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.parent">Parent</a></code> | <code>string</code> | The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.tagKey">TagKey</a></code> | <code>string</code> | The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#id GoogleResourceManagerBoundaryConfigA#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#parent GoogleResourceManagerBoundaryConfigA#parent}

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.

Boundaries under this parent filter projects on this tag key.

The service also accepts the 'tagKeys/{numeric_id}' form here, but
Boundaries accept only the namespaced form and are validated against this
value verbatim. Storing the 'tagKeys/{numeric_id}' form therefore makes
every subsequent Boundary create fail with 'FAILED_PRECONDITION'. Always
use the namespaced form, for example
'google_tags_tag_key.example.namespaced_name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#tag_key GoogleResourceManagerBoundaryConfigA#tag_key}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#deletion_policy GoogleResourceManagerBoundaryConfigA#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#id GoogleResourceManagerBoundaryConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.timeouts"></a>

```csharp
public GoogleResourceManagerBoundaryConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#timeouts GoogleResourceManagerBoundaryConfigA#timeouts}

---

### GoogleResourceManagerBoundaryConfigTimeouts <a name="GoogleResourceManagerBoundaryConfigTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleResourceManagerBoundaryConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#create GoogleResourceManagerBoundaryConfigA#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#delete GoogleResourceManagerBoundaryConfigA#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#update GoogleResourceManagerBoundaryConfigA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#create GoogleResourceManagerBoundaryConfigA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#delete GoogleResourceManagerBoundaryConfigA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#update GoogleResourceManagerBoundaryConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleResourceManagerBoundaryConfigTimeoutsOutputReference <a name="GoogleResourceManagerBoundaryConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleResourceManagerBoundaryConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleResourceManagerBoundaryConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a>

---



