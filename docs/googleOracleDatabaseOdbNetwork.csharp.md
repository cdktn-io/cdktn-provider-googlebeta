# `googleOracleDatabaseOdbNetwork` Submodule <a name="`googleOracleDatabaseOdbNetwork` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseOdbNetwork <a name="GoogleOracleDatabaseOdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network google_oracle_database_odb_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseOdbNetwork(Construct Scope, string Id, GoogleOracleDatabaseOdbNetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig">GoogleOracleDatabaseOdbNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig">GoogleOracleDatabaseOdbNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetGcpOracleZone">ResetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleOracleDatabaseOdbNetworkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts">GoogleOracleDatabaseOdbNetworkTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetGcpOracleZone` <a name="ResetGcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetGcpOracleZone"></a>

```csharp
private void ResetGcpOracleZone()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseOdbNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseOdbNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseOdbNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseOdbNetwork.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseOdbNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleOracleDatabaseOdbNetwork resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOracleDatabaseOdbNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOracleDatabaseOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference">GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.gcpOracleZoneInput">GcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.odbNetworkIdInput">OdbNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts">GoogleOracleDatabaseOdbNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.timeouts"></a>

```csharp
public GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference">GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GcpOracleZoneInput`<sup>Optional</sup> <a name="GcpOracleZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.gcpOracleZoneInput"></a>

```csharp
public string GcpOracleZoneInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `OdbNetworkIdInput`<sup>Optional</sup> <a name="OdbNetworkIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.odbNetworkIdInput"></a>

```csharp
public string OdbNetworkIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleOracleDatabaseOdbNetworkTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts">GoogleOracleDatabaseOdbNetworkTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseOdbNetworkConfig <a name="GoogleOracleDatabaseOdbNetworkConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseOdbNetworkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Network,
    string OdbNetworkId,
    string DeletionPolicy = null,
    bool|IResolvable DeletionProtection = null,
    string GcpOracleZone = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleOracleDatabaseOdbNetworkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.network">Network</a></code> | <code>string</code> | The name of the VPC network in the following format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | The ID of the OdbNetwork to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | The GCP Oracle zone where OdbNetwork is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#id GoogleOracleDatabaseOdbNetwork#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#project GoogleOracleDatabaseOdbNetwork#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts">GoogleOracleDatabaseOdbNetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#location GoogleOracleDatabaseOdbNetwork#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name of the VPC network in the following format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#network GoogleOracleDatabaseOdbNetwork#network}

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; set; }
```

- *Type:* string

The ID of the OdbNetwork to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#odb_network_id GoogleOracleDatabaseOdbNetwork#odb_network_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#deletion_policy GoogleOracleDatabaseOdbNetwork#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#deletion_protection GoogleOracleDatabaseOdbNetwork#deletion_protection}

---

##### `GcpOracleZone`<sup>Optional</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; set; }
```

- *Type:* string

The GCP Oracle zone where OdbNetwork is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#gcp_oracle_zone GoogleOracleDatabaseOdbNetwork#gcp_oracle_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#id GoogleOracleDatabaseOdbNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#labels GoogleOracleDatabaseOdbNetwork#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#project GoogleOracleDatabaseOdbNetwork#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkConfig.property.timeouts"></a>

```csharp
public GoogleOracleDatabaseOdbNetworkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts">GoogleOracleDatabaseOdbNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#timeouts GoogleOracleDatabaseOdbNetwork#timeouts}

---

### GoogleOracleDatabaseOdbNetworkTimeouts <a name="GoogleOracleDatabaseOdbNetworkTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseOdbNetworkTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#create GoogleOracleDatabaseOdbNetwork#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#delete GoogleOracleDatabaseOdbNetwork#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#update GoogleOracleDatabaseOdbNetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#create GoogleOracleDatabaseOdbNetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#delete GoogleOracleDatabaseOdbNetwork#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_oracle_database_odb_network#update GoogleOracleDatabaseOdbNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference <a name="GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts">GoogleOracleDatabaseOdbNetworkTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleOracleDatabaseOdbNetworkTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbNetwork.GoogleOracleDatabaseOdbNetworkTimeouts">GoogleOracleDatabaseOdbNetworkTimeouts</a>

---



