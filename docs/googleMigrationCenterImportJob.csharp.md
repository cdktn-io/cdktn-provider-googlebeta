# `googleMigrationCenterImportJob` Submodule <a name="`googleMigrationCenterImportJob` Submodule" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterImportJob <a name="GoogleMigrationCenterImportJob" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job google_migration_center_import_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJob(Construct Scope, string Id, GoogleMigrationCenterImportJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig">GoogleMigrationCenterImportJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig">GoogleMigrationCenterImportJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleMigrationCenterImportJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleMigrationCenterImportJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleMigrationCenterImportJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleMigrationCenterImportJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleMigrationCenterImportJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleMigrationCenterImportJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleMigrationCenterImportJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMigrationCenterImportJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMigrationCenterImportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterImportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.completeTime">CompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.executionReport">ExecutionReport</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList">GoogleMigrationCenterImportJobExecutionReportList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference">GoogleMigrationCenterImportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.validationReport">ValidationReport</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList">GoogleMigrationCenterImportJobValidationReportList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.assetSourceInput">AssetSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.importJobIdInput">ImportJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.assetSource">AssetSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.importJobId">ImportJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CompleteTime`<sup>Required</sup> <a name="CompleteTime" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.completeTime"></a>

```csharp
public string CompleteTime { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ExecutionReport`<sup>Required</sup> <a name="ExecutionReport" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.executionReport"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportList ExecutionReport { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList">GoogleMigrationCenterImportJobExecutionReportList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.timeouts"></a>

```csharp
public GoogleMigrationCenterImportJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference">GoogleMigrationCenterImportJobTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ValidationReport`<sup>Required</sup> <a name="ValidationReport" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.validationReport"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportList ValidationReport { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList">GoogleMigrationCenterImportJobValidationReportList</a>

---

##### `AssetSourceInput`<sup>Optional</sup> <a name="AssetSourceInput" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.assetSourceInput"></a>

```csharp
public string AssetSourceInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportJobIdInput`<sup>Optional</sup> <a name="ImportJobIdInput" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.importJobIdInput"></a>

```csharp
public string ImportJobIdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleMigrationCenterImportJobTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a>

---

##### `AssetSource`<sup>Required</sup> <a name="AssetSource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.assetSource"></a>

```csharp
public string AssetSource { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportJobId`<sup>Required</sup> <a name="ImportJobId" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.importJobId"></a>

```csharp
public string ImportJobId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterImportJobConfig <a name="GoogleMigrationCenterImportJobConfig" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AssetSource,
    string ImportJobId,
    string Location,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleMigrationCenterImportJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.assetSource">AssetSource</a></code> | <code>string</code> | Reference to a source. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.importJobId">ImportJobId</a></code> | <code>string</code> | ID of the import job. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-friendly display name. Maximum length is 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#id GoogleMigrationCenterImportJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#project GoogleMigrationCenterImportJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssetSource`<sup>Required</sup> <a name="AssetSource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.assetSource"></a>

```csharp
public string AssetSource { get; set; }
```

- *Type:* string

Reference to a source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#asset_source GoogleMigrationCenterImportJob#asset_source}

---

##### `ImportJobId`<sup>Required</sup> <a name="ImportJobId" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.importJobId"></a>

```csharp
public string ImportJobId { get; set; }
```

- *Type:* string

ID of the import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#import_job_id GoogleMigrationCenterImportJob#import_job_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#location GoogleMigrationCenterImportJob#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#deletion_policy GoogleMigrationCenterImportJob#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-friendly display name. Maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#display_name GoogleMigrationCenterImportJob#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#id GoogleMigrationCenterImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#labels GoogleMigrationCenterImportJob#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#project GoogleMigrationCenterImportJob#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.timeouts"></a>

```csharp
public GoogleMigrationCenterImportJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#timeouts GoogleMigrationCenterImportJob#timeouts}

---

### GoogleMigrationCenterImportJobExecutionReport <a name="GoogleMigrationCenterImportJobExecutionReport" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReport {

};
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrors <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrors {

};
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations {

};
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors {

};
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors {

};
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError {

};
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError {

};
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError {

};
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors {

};
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError {

};
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors {

};
```


### GoogleMigrationCenterImportJobTimeouts <a name="GoogleMigrationCenterImportJobTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#create GoogleMigrationCenterImportJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#delete GoogleMigrationCenterImportJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#update GoogleMigrationCenterImportJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#create GoogleMigrationCenterImportJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#delete GoogleMigrationCenterImportJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_migration_center_import_job#update GoogleMigrationCenterImportJob#update}.

---

### GoogleMigrationCenterImportJobValidationReport <a name="GoogleMigrationCenterImportJobValidationReport" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReport {

};
```


### GoogleMigrationCenterImportJobValidationReportFileValidations <a name="GoogleMigrationCenterImportJobValidationReportFileValidations" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidations {

};
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors {

};
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors {

};
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError {

};
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError {

};
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError {

};
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors {

};
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError {

};
```


### GoogleMigrationCenterImportJobValidationReportJobErrors <a name="GoogleMigrationCenterImportJobValidationReportJobErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportJobErrors {

};
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get"></a>

```csharp
private GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get"></a>

```csharp
private GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileErrors">FileErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.partialReport">PartialReport</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.rowErrors">RowErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileErrors`<sup>Required</sup> <a name="FileErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileErrors"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList FileErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList</a>

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `PartialReport`<sup>Required</sup> <a name="PartialReport" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.partialReport"></a>

```csharp
public IResolvable PartialReport { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RowErrors`<sup>Required</sup> <a name="RowErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.rowErrors"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList RowErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get"></a>

```csharp
private GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get"></a>

```csharp
private GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError">CsvError</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CsvError`<sup>Required</sup> <a name="CsvError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList CsvError { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList</a>

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get"></a>

```csharp
private GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get"></a>

```csharp
private GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get"></a>

```csharp
private GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.archiveError">ArchiveError</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.assetTitle">AssetTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.csvError">CsvError</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmName">VmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmUuid">VmUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.xlsxError">XlsxError</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveError`<sup>Required</sup> <a name="ArchiveError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.archiveError"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList ArchiveError { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList</a>

---

##### `AssetTitle`<sup>Required</sup> <a name="AssetTitle" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.assetTitle"></a>

```csharp
public string AssetTitle { get; }
```

- *Type:* string

---

##### `CsvError`<sup>Required</sup> <a name="CsvError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.csvError"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList CsvError { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList</a>

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.errors"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList</a>

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `VmName`<sup>Required</sup> <a name="VmName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmName"></a>

```csharp
public string VmName { get; }
```

- *Type:* string

---

##### `VmUuid`<sup>Required</sup> <a name="VmUuid" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmUuid"></a>

```csharp
public string VmUuid { get; }
```

- *Type:* string

---

##### `XlsxError`<sup>Required</sup> <a name="XlsxError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.xlsxError"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList XlsxError { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get"></a>

```csharp
private GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet">Sheet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `Sheet`<sup>Required</sup> <a name="Sheet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet"></a>

```csharp
public string Sheet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get"></a>

```csharp
private GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.get"></a>

```csharp
private GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fileValidations">FileValidations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.jobErrors">JobErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileValidations`<sup>Required</sup> <a name="FileValidations" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fileValidations"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList FileValidations { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList</a>

---

##### `JobErrors`<sup>Required</sup> <a name="JobErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.jobErrors"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList JobErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrors</a>

---


### GoogleMigrationCenterImportJobExecutionReportList <a name="GoogleMigrationCenterImportJobExecutionReportList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.get"></a>

```csharp
private GoogleMigrationCenterImportJobExecutionReportOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobExecutionReportOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobExecutionReportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.executionErrors">ExecutionErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.framesReported">FramesReported</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.totalRowsCount">TotalRowsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReport">GoogleMigrationCenterImportJobExecutionReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionErrors`<sup>Required</sup> <a name="ExecutionErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.executionErrors"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList ExecutionErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList</a>

---

##### `FramesReported`<sup>Required</sup> <a name="FramesReported" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.framesReported"></a>

```csharp
public double FramesReported { get; }
```

- *Type:* double

---

##### `TotalRowsCount`<sup>Required</sup> <a name="TotalRowsCount" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.totalRowsCount"></a>

```csharp
public double TotalRowsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobExecutionReport InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReport">GoogleMigrationCenterImportJobExecutionReport</a>

---


### GoogleMigrationCenterImportJobTimeoutsOutputReference <a name="GoogleMigrationCenterImportJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleMigrationCenterImportJobTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get"></a>

```csharp
private GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors">GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors">GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.get"></a>

```csharp
private GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileErrors">FileErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList">GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.partialReport">PartialReport</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.rowErrors">RowErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidations">GoogleMigrationCenterImportJobValidationReportFileValidations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileErrors`<sup>Required</sup> <a name="FileErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileErrors"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList FileErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList">GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList</a>

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `PartialReport`<sup>Required</sup> <a name="PartialReport" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.partialReport"></a>

```csharp
public IResolvable PartialReport { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RowErrors`<sup>Required</sup> <a name="RowErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.rowErrors"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList RowErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidations">GoogleMigrationCenterImportJobValidationReportFileValidations</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get"></a>

```csharp
private GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get"></a>

```csharp
private GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError">CsvError</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CsvError`<sup>Required</sup> <a name="CsvError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList CsvError { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList</a>

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get"></a>

```csharp
private GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get"></a>

```csharp
private GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get"></a>

```csharp
private GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.archiveError">ArchiveError</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.assetTitle">AssetTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.csvError">CsvError</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmName">VmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmUuid">VmUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.xlsxError">XlsxError</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveError`<sup>Required</sup> <a name="ArchiveError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.archiveError"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList ArchiveError { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList</a>

---

##### `AssetTitle`<sup>Required</sup> <a name="AssetTitle" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.assetTitle"></a>

```csharp
public string AssetTitle { get; }
```

- *Type:* string

---

##### `CsvError`<sup>Required</sup> <a name="CsvError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.csvError"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList CsvError { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList</a>

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.errors"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList</a>

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `VmName`<sup>Required</sup> <a name="VmName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmName"></a>

```csharp
public string VmName { get; }
```

- *Type:* string

---

##### `VmUuid`<sup>Required</sup> <a name="VmUuid" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmUuid"></a>

```csharp
public string VmUuid { get; }
```

- *Type:* string

---

##### `XlsxError`<sup>Required</sup> <a name="XlsxError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.xlsxError"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList XlsxError { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get"></a>

```csharp
private GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet">Sheet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `Sheet`<sup>Required</sup> <a name="Sheet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet"></a>

```csharp
public string Sheet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError</a>

---


### GoogleMigrationCenterImportJobValidationReportJobErrorsList <a name="GoogleMigrationCenterImportJobValidationReportJobErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportJobErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.get"></a>

```csharp
private GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference <a name="GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrors">GoogleMigrationCenterImportJobValidationReportJobErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportJobErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrors">GoogleMigrationCenterImportJobValidationReportJobErrors</a>

---


### GoogleMigrationCenterImportJobValidationReportList <a name="GoogleMigrationCenterImportJobValidationReportList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.get"></a>

```csharp
private GoogleMigrationCenterImportJobValidationReportOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMigrationCenterImportJobValidationReportOutputReference <a name="GoogleMigrationCenterImportJobValidationReportOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMigrationCenterImportJobValidationReportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.fileValidations">FileValidations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList">GoogleMigrationCenterImportJobValidationReportFileValidationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.jobErrors">JobErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList">GoogleMigrationCenterImportJobValidationReportJobErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReport">GoogleMigrationCenterImportJobValidationReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileValidations`<sup>Required</sup> <a name="FileValidations" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.fileValidations"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportFileValidationsList FileValidations { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList">GoogleMigrationCenterImportJobValidationReportFileValidationsList</a>

---

##### `JobErrors`<sup>Required</sup> <a name="JobErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.jobErrors"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReportJobErrorsList JobErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList">GoogleMigrationCenterImportJobValidationReportJobErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterImportJobValidationReport InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReport">GoogleMigrationCenterImportJobValidationReport</a>

---



